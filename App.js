import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { useState } from 'react';
import Main from './src/Main';



export default function App() {
  return (
    <View>
      <StatusBar/>

      <Main />
    </View>
  );
}


