import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({name: 'DragDrop'})
  .useReactNative()
  .connect();

export default reactotron;
