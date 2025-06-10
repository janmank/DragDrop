import {Box, HStack, Input, InputField} from '@gluestack-ui/themed';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../stacks/AppStack';
import {ScreenWrapper} from '../components/layout';
import {CustomButton, EmptyList, Header} from '../components/shared';
import {useState} from 'react';
import {ITask} from '../interfaces';
import {TaskTile} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTask,
  deleteTask,
  reorderTasks,
  toggleTask,
} from '../redux/actions/projects';
import {selectTasks} from '../redux/selectors/projects';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

const TasksListScreen = () => {
  const {params} = useRoute<RouteProp<HomeStackParamList, 'TasksListScreen'>>();
  const {project} = params;
  const [taskName, setTaskName] = useState<string>('');
  const dispatch = useDispatch();
  const tasksRedux = useSelector(selectTasks(project.id));
  const [filter, setFilter] = useState<'all' | 'completed' | 'not_completed'>(
    'all',
  );

  const handleDragEnd = ({data}: {data: ITask[]}) => {
    dispatch(reorderTasks(project.id, data));
  };

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

  const filteredTasks = tasksRedux.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'not_completed') {
      return !task.completed;
    }
    return true;
  });

  return (
    <ScreenWrapper>
      <Header title={project.name} />
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
        <HStack space="md" mb="$4" justifyContent="center">
          <CustomButton
            variant={filter === 'all' ? 'filterOn' : 'filterOff'}
            title="All"
            onPress={() => setFilter('all')}
          />
          <CustomButton
            variant={filter === 'completed' ? 'filterOn' : 'filterOff'}
            title="Completed"
            onPress={() => setFilter('completed')}
          />
          <CustomButton
            variant={filter === 'not_completed' ? 'filterOn' : 'filterOff'}
            title="Not Completed"
            onPress={() => setFilter('not_completed')}
          />
        </HStack>
        <DraggableFlatList
          data={filteredTasks}
          keyExtractor={item => item.id}
          onDragEnd={handleDragEnd}
          renderItem={({item, drag, isActive}: RenderItemParams<ITask>) => (
            <TaskTile
              task={item}
              deleteTask={handleDeleteTask}
              toggleTask={handleToggleTask}
              onLongPress={drag}
              isActive={isActive}
            />
          )}
          ListEmptyComponent={
            <EmptyList
              title={
                filter === 'completed' || filter === 'not_completed'
                  ? 'filters'
                  : 'tasks'
              }
            />
          }
          showsVerticalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            gap: 16,
            paddingBottom: 110,
            flexGrow: 1,
          }}
        />
      </Box>
    </ScreenWrapper>
  );
};

export default TasksListScreen;
