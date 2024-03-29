import React, { Children } from 'react'; 
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { Background } from './src/components/Background';
import { Routes } from './src/routes';


export default function App(){ 
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded && !fontError){
    return null;
  }

  return(
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      /> 
      <Routes />
    </Background>
  );
}