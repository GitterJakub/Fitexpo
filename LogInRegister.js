import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {myAdmin} from "./api/api";
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


export function LogInRegister() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (username === myAdmin.username && password === myAdmin.password){
            console.log("success");

        }else {
            console.log("not");
            console.log(username+ "  " + myAdmin.username);
            console.log(password + "   " + myAdmin.password)
        }
    }

    return(
        <View>
            <Text>Login</Text>
            <Text>Username: </Text>
            <TextInput value={username} onChangeText={setUsername}></TextInput>
            <Text>Password: </Text>
            <TextInput value={password} onChangeText={setPassword}></TextInput>
            <Button title={"Log in"} onPress={login} ></Button>
            <Text>OR</Text>
            <Button title={"Register"}></Button>
        </View>
    )
}