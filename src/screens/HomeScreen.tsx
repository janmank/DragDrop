import React, {useState} from 'react';
import {Box, Input, VStack, InputField} from '@gluestack-ui/themed';
import {ScreenWrapper} from '../components/layout';
import {useNavigation} from '@react-navigation/native';
import {IProject} from '../interfaces';
import {CustomButton} from '../components/shared';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../stacks/AppStack';
import {ProjectTile} from '../components';

const HomeScreen = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [projectName, setProjectName] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  const addProject = () => {
    if (projectName.trim()) {
      setProjects([
        ...projects,
        {
          name: projectName,
          id: Date.now().toString() + Math.random().toString(36).slice(2),
          completed: false,
          tasks: [],
        },
      ]);
      setProjectName('');
    }
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const openProject = (project: IProject) => {
    navigation.navigate('TasksListScreen', {project});
  };

  return (
    <ScreenWrapper>
      <Box flex={1} p="$4">
        <Input borderColor="#C8C8C8" borderRadius="$lg" mb="$4">
          <InputField
            value={projectName}
            onChangeText={setProjectName}
            placeholder="Enter project name..."
          />
        </Input>
        <CustomButton title={'Add Project'} onPress={addProject} />

        <VStack space="md" pt="$6">
          {projects.map(project => (
            <ProjectTile
              key={project.id}
              project={project}
              openProject={openProject}
              deleteProject={deleteProject}
            />
          ))}
        </VStack>
      </Box>
    </ScreenWrapper>
  );
};

export default HomeScreen;
