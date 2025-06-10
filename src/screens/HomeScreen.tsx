import React, {useState} from 'react';
import {Box, Input, InputField} from '@gluestack-ui/themed';
import {ScreenWrapper} from '../components/layout';
import {useNavigation} from '@react-navigation/native';
import {IProject} from '../interfaces';
import {CustomButton, EmptyList} from '../components/shared';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../stacks/AppStack';
import {ProjectTile} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectProjects} from '../redux/selectors/projects';
import {
  addProject,
  deleteProject,
  renameProject,
} from '../redux/actions/projects';
import {useProjectsPersistence} from '../hooks';
import {FlatList} from 'react-native';

const HomeScreen = () => {
  const [projectName, setProjectName] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  const projectsRedux = useSelector(selectProjects);
  const dispatch = useDispatch();
  useProjectsPersistence();

  const handleAddProject = () => {
    if (projectName.trim()) {
      const newProject: IProject = {
        name: projectName,
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        completed: false,
        tasks: [],
      };
      dispatch(addProject(newProject));
      setProjectName('');
    }
  };

  const handleDeleteProject = (id: string) => {
    dispatch(deleteProject(id));
  };

  const openProject = (project: IProject) => {
    navigation.navigate('TasksListScreen', {project});
  };

  const updateProjectName = (projectId: string, newName: string) => {
    dispatch(renameProject(projectId, newName));
  };

  return (
    <ScreenWrapper>
      <Box flex={1} p="$4">
        <Box pb="$4">
          <Input borderColor="#C8C8C8" borderRadius="$lg" mb="$4">
            <InputField
              value={projectName}
              onChangeText={setProjectName}
              placeholder="Enter project name..."
            />
          </Input>
          <CustomButton title={'Add Project'} onPress={handleAddProject} />
        </Box>
        <FlatList
          data={projectsRedux}
          keyExtractor={project => project.id}
          renderItem={project => (
            <ProjectTile
              key={project.item.id}
              project={project.item}
              openProject={openProject}
              deleteProject={handleDeleteProject}
              updateProjectName={updateProjectName}
            />
          )}
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            gap: 16,
            paddingBottom: 16,
            flexGrow: 1,
          }}
          ListEmptyComponent={<EmptyList title={'projects'} />}
        />
      </Box>
    </ScreenWrapper>
  );
};

export default HomeScreen;
