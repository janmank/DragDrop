import {Text, Box} from '@gluestack-ui/themed';

interface IEmptyListProps {
  title: 'tasks' | 'projects' | 'filters';
}

const EmptyList = ({title}: IEmptyListProps) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text bold fontSize="$2xl">
        {title === 'filters'
          ? 'There is no tasks with this filter'
          : `No ${title}. Try to add one.`}
      </Text>
    </Box>
  );
};

export default EmptyList;
