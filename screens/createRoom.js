import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../components/button";


export default function CreateRoom({ navigation }) {
    const [body, setBody ] = useState({})
    useEffect(() => {
        console.log('body', body)
    }, [body])

    const handleCreateRoom = (body) => {
        fetch('https://cc0e-107-190-74-83.ngrok-free.app/room/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
            console.error('errores', error);
        });
    }

    return (
        <View style={{backgroundColor:'red', flex:1}}>
            <Text>CreateRoom</Text>
            <TextInput style={{backgroundColor:'white'}}onChangeText={(text) =>setBody(prevState => ({ ...prevState, code: text }))}/>
            <TextInput style={{backgroundColor:'white', borderWidth:2, marginTop:10}}onChangeText={(text) =>setBody(prevState => ({ ...prevState, options: text }))}/>
            <Button text="Create Room" onPress={() => handleCreateRoom(body) }/>
        </View>
    );
}

