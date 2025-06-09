import {Box, Text} from '@gluestack-ui/themed';
import {useDispatch} from 'react-redux';
import {guestLogin} from '../redux/actions/auth';
import {CustomButton} from './shared';

const LoginComponent = () => {
  const dispatch = useDispatch();
  return (
    <Box flex={1} justifyContent="space-between" h="100%" px="$4" py="$8">
      <Text fontSize="$2xl" fontWeight="$semibold" color="$white">
        Welcome in Drag and Drop
      </Text>

      <CustomButton
        title={'Login as guest'}
        onPress={() => dispatch(guestLogin())}
      />
    </Box>
  );
};

export default LoginComponent;
