import {Button, FlatList, Image, SafeAreaView, Text, TextInput, View} from "react-native";
import responderTouchHistoryStore from "react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore";
import {fetch} from "react-native/Libraries/Network/fetch";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

let exc = ['hello'];

export function Fitnesscourse(){

    const navigation = useNavigation();
    const goToCreate = () => {
      navigation.navigate("Create");
    }

    return(
        <SafeAreaView>
            <Text>Your Courses</Text>
            <Button title={"Create Course"} onPress={goToCreate}/>
        </SafeAreaView>
    )
}

export function CourseCreator(){

    const [data, setData] = useState();
    const [bodyPart, setBodyPart] = useState("");

    let example = "1";
    let exc = {
        bodyPart:"",
        name:"Here",
        equipment:"",
        gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0007.gif"
    }
    const [myExes, setMyExes] = useState(exc);



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '99471330c5mshe6c4ddecc33bd6cp1c969ajsn58790eddaa5a',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };



    const place = () => {
        fetch('https://exercisedb.p.rapidapi.com/exercises/bodypart/'+bodyPart.toLowerCase(), options)
            .then(response => response.json())
            .then(data => setData(JSON.stringify(data)))
            .catch(err => console.error(err));
    }


    


    const pDa = () => {
        let tig = JSON.parse(data);
        example = tig[0].bodyPart;
        console.log(data);
        console.log(tig[0]);
        console.log(tig[0].bodyPart);
        exc.bodyPart = tig[0].bodyPart;
        exc.name = tig[0].name;
        exc.equipment = tig[0].equipment;
        exc.gifUrl = tig[0].gifUrl;
        setMyExes(exc);
        console.log(exc.name)
        console.log(exc.gifUrl);
    }


    return(
        <SafeAreaView>
            <TextInput placeholder={"A Body Part"}  value={bodyPart} onChangeText={setBodyPart}/>
            <Button title={"show"} onPress={place}/>
            <Button title={"dats"} onPress={pDa}/>
            <Text>{myExes.name}</Text>
        </SafeAreaView>
    )
}