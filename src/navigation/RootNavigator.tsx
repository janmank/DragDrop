import {useSelector} from 'react-redux';
import {AppStack, AuthStack} from '../stacks';
import {selectGuestLoged} from '../redux/selectors/auth';

const RootNavigator = () => {
  const isGuestLogged = useSelector(selectGuestLoged);

  return isGuestLogged ? <AppStack /> : <AuthStack />;
};

export default RootNavigator;
