import {
  HStack,
  Box,
  Text,
  VStack,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import {CustomButton} from './shared';
import {IProject} from '../interfaces';
import {useState} from 'react';

interface IProjectTileProps {
  project: IProject;
  openProject: (project: IProject) => void;
  deleteProject: (id: string) => void;
  updateProjectName: (id: string, newName: string) => void;
}

const ProjectTile = ({
  project,
  openProject,
  deleteProject,
  updateProjectName,
}: IProjectTileProps) => {
  const [showTasks, setShowTasks] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedName, setEditedName] = useState<string>(project.name);

  const handleEditSave = () => {
    if (editedName.trim()) {
      updateProjectName(project.id, editedName.trim());
    }
    setIsEditing(false);
  };

  return (
    <VStack
      w="100%"
      p="$4"
      borderWidth="$1"
      borderColor="$primary"
      borderRadius="$2xl"
      space="sm">
      <Box flex={1} pr="$2">
        {isEditing ? (
          <Input size="md">
            <InputField
              value={editedName}
              onChangeText={setEditedName}
              onSubmitEditing={handleEditSave}
              returnKeyType="done"
              autoFocus
              placeholder="Project name"
            />
          </Input>
        ) : (
          <Text
            onPress={() => openProject(project)}
            fontSize="$2xl"
            bold
            pb="$2"
            numberOfLines={2}
            ellipsizeMode="tail">
            {project.name}
          </Text>
        )}
      </Box>

      <HStack space="sm" justifyContent="space-between">
        {isEditing ? (
          <CustomButton variant="small" title="Save" onPress={handleEditSave} />
        ) : (
          <CustomButton
            variant="small"
            title="Edit"
            onPress={() => {
              setEditedName(project.name);
              setIsEditing(true);
            }}
          />
        )}
        <CustomButton
          variant="small"
          title={showTasks ? 'Hide Tasks' : 'Show Tasks'}
          onPress={() => setShowTasks(prev => !prev)}
        />
        <CustomButton
          variant="small"
          title="Delete"
          onPress={() => deleteProject(project.id)}
        />
      </HStack>

      {showTasks && (
        <VStack>
          {project.tasks.length > 0 ? (
            project.tasks.map(task => (
              <Text
                py="$1"
                key={task.id}
                textDecorationLine={task.completed ? 'line-through' : 'none'}
                numberOfLines={2}
                bold>
                {task.name}
              </Text>
            ))
          ) : (
            <Box flex={1} justifyContent="center" alignItems="center">
              <Text bold fontSize="$xl">
                There is no tasks.
              </Text>
            </Box>
          )}
        </VStack>
      )}
    </VStack>
  );
};

export default ProjectTile;
