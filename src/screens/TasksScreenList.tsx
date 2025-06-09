import {Box, VStack, Text} from '@gluestack-ui/themed';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../stacks/AppStack';
import {ScreenWrapper} from '../components/layout';
import {Header} from '../components/shared';

const TasksListScreen = () => {
  const {params} = useRoute<RouteProp<HomeStackParamList, 'TasksListScreen'>>();
  const {project} = params;

  return (
    <ScreenWrapper>
      <Header title={project.name + ' tasks'} />
      <Box flex={1} p="$4">
        <VStack space="sm">
          {project.tasks.length > 0 ? (
            project.tasks.map((task, index) => (
              <Text key={index}>• {task.name}</Text>
            ))
          ) : (
            <Text color="$gray500">No Tasks</Text>
          )}
        </VStack>
      </Box>
    </ScreenWrapper>
  );
};

export default TasksListScreen;
