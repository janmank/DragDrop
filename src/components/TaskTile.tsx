import {
  VStack,
  HStack,
  Text,
  CheckboxIndicator,
  CheckboxIcon,
  Checkbox,
} from '@gluestack-ui/themed';
import {CustomButton} from './shared';
import {ITask} from '../interfaces';
import {Pressable} from 'react-native';

interface ITaskTileProps {
  task: ITask;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  onLongPress?: () => void;
  isActive?: boolean;
}
const TaskTile = ({
  task,
  deleteTask,
  toggleTask,
  onLongPress,
  isActive,
}: ITaskTileProps) => {
  return (
    <Pressable onLongPress={onLongPress} disabled={!onLongPress}>
      <VStack
        w="100%"
        p="$4"
        opacity={isActive ? 0.8 : 1}
        borderWidth="$1"
        borderColor={task.completed ? '$green500' : '$red500'}
        borderRadius="$2xl"
        space="sm">
        <Text
          bold
          fontSize="$lg"
          numberOfLines={2}
          ellipsizeMode="tail"
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
    </Pressable>
  );
};

export default TaskTile;
