import { registerRootComponent } from 'expo';
import { useEffect } from 'react';
import { LogBox } from 'react-native';

import App from './App';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
