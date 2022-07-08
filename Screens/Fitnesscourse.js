import {Button, SafeAreaView, Text, TextInput} from "react-native";
import responderTouchHistoryStore from "react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore";
import {fetch} from "react-native/Libraries/Network/fetch";
import {useState} from "react";

let exc = ['hello'];

export function Fitnesscourse(){

    const [data, setData] = useState();
    const [bodyPart, setBodyPart] = useState("");


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

    return(
        <SafeAreaView>
            <Text>Your Courses</Text>
            <TextInput placeholder={"A Body Part"}  value={bodyPart} onChangeText={setBodyPart}/>
            <Button title={"show"} onPress={place}/>
            <Text>{data}</Text>
        </SafeAreaView>
    )
}