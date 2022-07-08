import {SafeAreaView, Text} from "react-native";
import {user} from "../LogInRegister";
import {alon} from "../LogInRegister";

export function Profile(){
    return(
        <SafeAreaView>
            <Text>This is Profile</Text>
            <Text>{alon.username + " " + alon.password}</Text>
            <Text>{alon.height + "cm " + alon.weight + "kg"}</Text>
            <Text>{"BMI: " + Math.round(alon.weight / Math.pow(alon.height/100, 2))}</Text>
            <Text>{"Age: " + alon.age}</Text>
        </SafeAreaView>
    )
}