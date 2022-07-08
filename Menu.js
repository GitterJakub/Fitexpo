import {Button, SafeAreaView, View} from "react-native";
import {useNavigation} from "@react-navigation/native";


export function Menu(){
    const navigation = useNavigation();
    const goToProfile = () => {
        navigation.navigate("Profile");
        console.log("pressed");
    }
    const goToStepscount = () => {
      navigation.navigate("Stepscount");
    }
    const goToFitnesscourse = () => {
      navigation.navigate("Fitnesscourse")
    }


    return(
        <SafeAreaView>
            <Button title={"Profile"} onPress={goToProfile}/>
            <Button title={"Stepscount"} onPress={goToStepscount}/>
            <Button title={"Fitnesscourse"} onPress={goToFitnesscourse}/>
        </SafeAreaView>
    )
}