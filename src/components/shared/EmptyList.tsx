import {Text, Box} from '@gluestack-ui/themed';

interface IEmptyListProps {
  title: 'tasks' | 'projects';
}

const EmptyList = ({title}: IEmptyListProps) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text bold fontSize="$2xl">
        No {title}. Try to add one.
      </Text>
    </Box>
  );
};

export default EmptyList;
