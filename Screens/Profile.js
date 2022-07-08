import {SafeAreaView, Text} from "react-native";
import {user} from "../LogInRegister";
import {alon} from "../LogInRegister";

export function Profile(){
    return(
        <SafeAreaView>
            <Text>This is Profile</Text>
            <Text>{alon.username + " " + alon.password}</Text>
            <Text>{alon.height + " " + alon.weight}</Text>
        </SafeAreaView>
    )
}