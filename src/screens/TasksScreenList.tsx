import {Box, Input, InputField} from '@gluestack-ui/themed';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../stacks/AppStack';
import {ScreenWrapper} from '../components/layout';
import {CustomButton, EmptyList, Header} from '../components/shared';
import {useEffect, useState} from 'react';
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
  const [tasksReduxState, setTasksReduxState] = useState(tasksRedux);

  useEffect(() => {
    setTasksReduxState(tasksRedux);
  }, [tasksRedux]);

  const handleDragEnd = ({data}: {data: ITask[]}) => {
    setTasksReduxState(data);
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
        <DraggableFlatList
          data={tasksReduxState}
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
          ListEmptyComponent={<EmptyList title={'tasks'} />}
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
