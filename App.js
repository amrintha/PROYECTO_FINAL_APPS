import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './src/components/Header';
import {  useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './src/navigation/TabsNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() { 
  
const [loaded, error] = useFonts({
    'BBH-Sans-Bogle': require('./assets/fonts/BBHSansBogle-Regular.ttf'),
    'Saira-Italic': require('./assets/fonts/Saira-Italic-VariableFont.ttf'),
    'Saira-Variable': require('./assets/fonts/Saira-VariableFont.ttf'),
});

useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


   return (
    <NavigationContainer>
      <TabsNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );

}
