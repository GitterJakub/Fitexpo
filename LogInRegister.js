import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
export function LogInRegister() {

    return(
        <View>
            <Text>Login</Text>
            <Text>Username: </Text>
            <TextInput></TextInput>
            <Text>Password: </Text>
            <TextInput></TextInput>
            <Button title={"Log in"}  ></Button>
            <Text>OR</Text>
            <Button title={"Register"}></Button>
        </View>
    )
}