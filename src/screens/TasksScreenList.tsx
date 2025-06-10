import {Box, Input, InputField} from '@gluestack-ui/themed';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../stacks/AppStack';
import {ScreenWrapper} from '../components/layout';
import {CustomButton, EmptyList, Header} from '../components/shared';
import {useState} from 'react';
import {ITask} from '../interfaces';
import {TaskTile} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, deleteTask, toggleTask} from '../redux/actions/projects';
import {selectTasks} from '../redux/selectors/projects';
import {FlatList} from 'react-native';

const TasksListScreen = () => {
  const {params} = useRoute<RouteProp<HomeStackParamList, 'TasksListScreen'>>();
  const {project} = params;
  const [taskName, setTaskName] = useState<string>('');
  const dispatch = useDispatch();
  const tasksRedux = useSelector(selectTasks(project.id));

  const handleAddTask = () => {
    if (taskName.trim()) {
      const newTask: ITask = {
        name: taskName,
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        completed: false,
      };
      dispatch(addTask(project.id, newTask));
      setTaskName('');
    }
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(project.id, id));
  };

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(project.id, id));
  };

  return (
    <ScreenWrapper>
      <Header title={project.name + ' tasks'} />
      <Box flex={1} p="$4">
        <Box pb="$4">
          <Input borderColor="#C8C8C8" borderRadius="$lg" mb="$4">
            <InputField
              value={taskName}
              onChangeText={setTaskName}
              placeholder="Enter task name..."
            />
          </Input>
          <CustomButton title={'Add Task'} onPress={handleAddTask} />
        </Box>
        <FlatList
          data={tasksRedux}
          keyExtractor={task => task.id}
          renderItem={task => (
            <TaskTile
              task={task.item as ITask}
              deleteTask={handleDeleteTask}
              toggleTask={handleToggleTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            gap: 16,
            paddingBottom: 16,
            flexGrow: 1,
          }}
          ListEmptyComponent={<EmptyList title={'tasks'} />}
        />
      </Box>
    </ScreenWrapper>
  );
};

export default TasksListScreen;
