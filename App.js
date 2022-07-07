import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {LogInRegister} from './LogInRegister';
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (

        <NavigationContainer>
          <LogInRegister></LogInRegister>
        </NavigationContainer>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
