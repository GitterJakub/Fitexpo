import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {myAdmin} from "./api/api";
import {useNavigation} from "@react-navigation/native";
//import { initializeApp } from 'firebase/app';



// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'api-key',
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'project-id',
    storageBucket: 'project-id.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
};

//initializeApp(firebaseConfig);

export let user;

export function LogInRegister() {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const login = () => {
        if (username === myAdmin.username && password === myAdmin.password){
            console.log("success");
            navigation.navigate("Menu");
            user = myAdmin;
        }else {
            console.log("not");
            console.log(username+ "  " + myAdmin.username);
            console.log(password + "   " + myAdmin.password)
        }
    }

    return(
        <SafeAreaView>
            <Text>Login</Text>
            <Text>Username: </Text>
            <TextInput value={username} onChangeText={setUsername}/>
            <Text>Password: </Text>
            <TextInput value={password} onChangeText={setPassword}/>
            <Button title={"Log in"} onPress={login} />
            <Text>OR</Text>
            <Button title={"Register"}/>
        </SafeAreaView>
    )
}