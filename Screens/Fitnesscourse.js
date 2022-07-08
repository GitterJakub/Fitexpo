import {Button, FlatList, SafeAreaView, Text, TextInput, View} from "react-native";
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
            .then(response => console.log(response))
            .then(data => setData(JSON.stringify(data)))
            .catch(err => console.error(err));
    }

    const Item = ({name}) => {
        return(
        <View>
            <Text>{name}</Text>
            <Button title={"Select"}/>
        </View>
        );
    }
    
    const renderItem = ({item}) => (
      <Item title={item.name}/>
    );

    return(
        <SafeAreaView>
            <TextInput placeholder={"A Body Part"}  value={bodyPart} onChangeText={setBodyPart}/>
            <Button title={"show"} onPress={place}/>
            <FlatList data={data} renderItem={renderItem}/>
        </SafeAreaView>
    )
}