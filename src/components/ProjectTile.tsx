import {HStack, Box, Text} from '@gluestack-ui/themed';
import {CustomButton} from './shared';
import {IProject} from '../interfaces';

interface IProjectTileProps {
  project: IProject;
  openProject: (project: IProject) => void;
  deleteProject: (id: string) => void;
}

const ProjectTile = ({
  project,
  openProject,
  deleteProject,
}: IProjectTileProps) => {
  return (
    <HStack
      key={project.id}
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      px="$2">
      <Box flex={1} pr="$2">
        <Text
          onPress={() => openProject(project)}
          fontSize="$lg"
          numberOfLines={2}
          ellipsizeMode="tail">
          {project.name}
        </Text>
      </Box>

      <CustomButton
        variant="small"
        title={'Delete'}
        onPress={() => deleteProject(project.id)}
      />
    </HStack>
  );
};

export default ProjectTile;
