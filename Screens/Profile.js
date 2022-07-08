import {SafeAreaView, Text} from "react-native";
import {user} from "../LogInRegister";

export function Profile(){
    return(
        <SafeAreaView>
            <Text>This is Profile</Text>
            <Text>{user.username + " " + user.password}</Text>
        </SafeAreaView>
    )
}