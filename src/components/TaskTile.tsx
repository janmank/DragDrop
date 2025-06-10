import {
  HStack,
  Text,
  VStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
} from '@gluestack-ui/themed';
import {CustomButton} from './shared';
import {ITask} from '../interfaces';

interface ITaskTileProps {
  task: ITask;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const TaskTile = ({task, deleteTask, toggleTask}: ITaskTileProps) => {
  return (
    <VStack
      w="100%"
      p="$4"
      space="sm"
      borderWidth="$1"
      borderColor={task.completed ? '$green500' : '$red500'}
      borderRadius="$2xl"
      bg="$white">
      <Text
        fontSize="$2xl"
        bold
        numberOfLines={2}
        ellipsizeMode="tail"
        pb="$4"
        textDecorationLine={task.completed ? 'line-through' : 'none'}>
        {task.name}
      </Text>

      <HStack space="sm" justifyContent="space-between">
        <Checkbox
          isChecked={task.completed}
          onChange={() => toggleTask(task.id)}
          aria-label="Mark task as done"
          value={''}>
          <CheckboxIndicator
            mr="$2"
            bg={task.completed ? '$green500' : '$transparent'}
            borderColor={task.completed ? '$green500' : '$primary'}>
            <CheckboxIcon />
          </CheckboxIndicator>
          <Text bold>{task.completed ? 'Done' : 'Mark as done'}</Text>
        </Checkbox>
        <CustomButton
          variant="small"
          title="Delete"
          onPress={() => deleteTask(task.id)}
        />
      </HStack>
    </VStack>
  );
};

export default TaskTile;
