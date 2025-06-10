import {Box, VStack, Text, Input, InputField} from '@gluestack-ui/themed';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../stacks/AppStack';
import {ScreenWrapper} from '../components/layout';
import {CustomButton, Header} from '../components/shared';
import {useState} from 'react';
import {ITask} from '../interfaces';
import {TaskTile} from '../components';

const TasksListScreen = () => {
  const {params} = useRoute<RouteProp<HomeStackParamList, 'TasksListScreen'>>();
  const {project} = params;

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskName, setTaskName] = useState<string>('');

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([
        ...tasks,
        {
          name: taskName,
          id: Date.now().toString() + Math.random().toString(36).slice(2),
          completed: false,
        },
      ]);
      setTaskName('');
    }
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(p => p.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  return (
    <ScreenWrapper>
      <Header title={project.name + ' tasks'} />
      <Box flex={1} p="$4">
        <Input borderColor="#C8C8C8" borderRadius="$lg" mb="$4">
          <InputField
            value={taskName}
            onChangeText={setTaskName}
            placeholder="Enter task name..."
          />
        </Input>
        <CustomButton title={'Add Task'} onPress={addTask} />
        <VStack space="sm" mt="$6">
          {tasks.length > 0 ? (
            tasks.map(task => (
              <TaskTile
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
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
