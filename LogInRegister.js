import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {myAdmin} from "./api/api";
import {useNavigation} from "@react-navigation/native";
//import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';



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
export let alon;
let use = 0;


export function LogInRegister() {
    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const login = async () => {
        console.log(AsyncStorage.getAllKeys())
        let user = AsyncStorage.getItem("2");
        let currentUser = "no User";
        currentUser = JSON.parse(await user);
        console.log(currentUser)
        console.log(currentUser.username)
        console.log(user)
        for (let i = 0; i < 1000000; i++) {
            if (await AsyncStorage.getItem(i + "") !== null){
                let u = JSON.parse(await AsyncStorage.getItem(i + ""));
                console.log(u);
                use++;
                if (u.username === username && u.password === password){
                    alon = u;
                    navigation.navigate("Menu");
                }
            }
        }

        if (username === myAdmin.username && password === myAdmin.password) {
            console.log("success");
            navigation.navigate("Menu");
            user = myAdmin;
        } else {
            console.log("not");
            console.log(username + "  " + myAdmin.username);
            console.log(password + "   " + myAdmin.password)
        }
    }
    const goRegister = () => {
        navigation.navigate("Registration");
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
            <Button title={"Register"} onPress={goRegister}/>
        </SafeAreaView>
    )
}

export function Registration(){
    const navigation = useNavigation();
    let user = {
        name: "",
        surname: "",
        age: "",
        height: "",
        weight: "",
        username: "",
        password: "",
    }
    const createAccount = async () =>{
        user.name = name;
        user.surname = surname;
        user.age = age;
        user.height = height;
        user.weight = weight;
        user.username = username;
        user.password = password;
        let num = 0;
        for (let i = 0; i < 1000000; i++) {
            if (await AsyncStorage.getItem(i + "") !== null){
                use++;
                num = use + 1;
            }
        }
        await AsyncStorage.setItem(num ,JSON.stringify(user));
        console.log(AsyncStorage.getItem(num));
        navigation.navigate("LogInRegister");
    }
    const [name, setName] = useState("");
    const [surname, setSurName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return(
        <SafeAreaView>
            <TextInput placeholder={"Name"} onChangeText={setName}></TextInput>
            <TextInput placeholder={"Surname"} onChangeText={setSurName}></TextInput>
            <TextInput placeholder={"Age"} onChangeText={setAge}></TextInput>
            <TextInput placeholder={"Height in cm"} onChangeText={setHeight}></TextInput>
            <TextInput placeholder={"Weight in kg"} onChangeText={setWeight}></TextInput>
            <TextInput placeholder={"Username"} onChangeText={setUsername}></TextInput>
            <TextInput placeholder={"Password"} onChangeText={setPassword}></TextInput>
            <Button title={"Create Account"} onPress={createAccount}></Button>
        </SafeAreaView>
    )
}