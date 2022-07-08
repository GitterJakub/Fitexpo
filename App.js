import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {LogInRegister} from './LogInRegister';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Menu} from "./Menu";
import {Profile} from "./Screens/Profile";
import {Stepscount} from "./Screens/Stepscount";
import {Fitnesscourse, CourseCreator} from "./Screens/Fitnesscourse";
import {Health} from "./Screens/Health";
const Stack = createStackNavigator();

export default function App() {
  return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"LogInRegister"} component={LogInRegister}/>
                <Stack.Screen name={"Menu"} component={Menu}/>
                <Stack.Screen name={"Profile"} component={Profile}/>
                <Stack.Screen name={"Stepscount"} component={Stepscount}/>
                <Stack.Screen name={"Fitnesscourse"} component={Fitnesscourse}/>
                <Stack.Screen name={"Create"} component={CourseCreator}/>
                <Stack.Screen name={"Health"} component={Health}/>
            </Stack.Navigator>
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
