import {ScreenWrapper} from '../components/layout';
import {LoginComponent} from '../components';
import {View} from '@gluestack-ui/themed';

const LoginScreen = () => {
  return (
    <ScreenWrapper backgroundColor="#1F2937">
      <View flex={1} justifyContent="space-between" alignItems="center" px="$8">
        <LoginComponent />
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
