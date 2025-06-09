import {Button, Text} from '@gluestack-ui/themed';
import {ScreenWrapper} from '../components/layout';
import {useDispatch} from 'react-redux';
import {guestLogin} from '../redux/actions/auth';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <Text>LoginScreen</Text>
      <Button h="$12" onPress={() => dispatch(guestLogin())}>
        <Text>Login</Text>
      </Button>
    </ScreenWrapper>
  );
};

export default LoginScreen;
