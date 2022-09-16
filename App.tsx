import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { initializeApp } from 'firebase/app';

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'api-AIzaSyCsegI_lSjOLncUvQ-xRSTfP3GrQhCUWDI',
//   authDomain: 'reactnativeone-36b78.firebaseapp.com',
//   databaseURL: 'https://reactnativeone-36b78.firebaseio.com',
//   projectId: 'reactnativeone-36b78',
//   storageBucket: 'reactnativeone-36b78.appspot.com',
//   appId: 'reactnativeone-36b78',
// };

initializeApp({
  apiKey: 'api-AIzaSyCsegI_lSjOLncUvQ-xRSTfP3GrQhCUWDI',
  authDomain: 'reactnativeone-36b78.firebaseapp.com',
  databaseURL: 'https://reactnativeone-36b78.firebaseio.com',
  projectId: 'reactnativeone-36b78',
  storageBucket: 'reactnativeone-36b78.appspot.com',
  appId: 'reactnativeone-36b78',
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
