import { useState, useRef } from "react";
import { Keyboard, View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Button from "../components/button";



export default function CreateRoom({ navigation }) {
    const [body, setBody ] = useState({})


    const handleCreateRoom = (body) => {
        alert(JSON.stringify(body))
        // fetch('https://cc0e-107-190-74-83.ngrok-free.app/room/create', {
        // method: 'POST',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(body),
        // })
        // .then((response) => response.json())
        // .then((json) => {
        //     console.log(json)
        // })
        // .catch((error) => {
        //     console.error('errores', error);
        // });
    }
    const pickerRef = useRef();

    const open = () => {
    pickerRef.current.focus();
    }

    const close = ()=> {
    pickerRef.current.blur();
    }
    const options = [
        { label: '135', value: '135' },
        { label: 'SML', value: 'SML' },
    ]

    return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.formContainer}>
                <Text style={styles.labels}>Ingresa el código de la sesión (max. 4 dig)</Text>
                <TextInput 
                editable
                style={styles.inputText} 
                maxLength={4} 
                keyboardType="numeric"
                onChangeText={(text) => setBody(prevState => ({ ...prevState, code: text }))}/>
                <Text style={styles.labels}> Selecciona las opciones de cartas</Text>
                <Picker
                style={{ width: 300}}
                ref={pickerRef}
                selectedValue={body.options}
                onValueChange={(text) => 
                    setBody(prevState => ({ ...prevState, options: text }))
                }>
                    
                {options.map((option) => (
                    <Picker.Item  color="#fff" key={option.value} label={option.label} value={option.value} />
                ))}
                </Picker>
                <Button text="Create Room" onPress={() => handleCreateRoom(body) }/>
            </View>
        </TouchableWithoutFeedback>
    );
}



const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        backgroundColor: '#2f4daa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        borderWidth: 2,
        borderColor: '#b8b8b8', 
        borderRadius: 4,
        width: 300,
        backgroundColor: '#fff',
        height: 50,
        marginTop: 20,
        marginBottom: 20,
        textAlign:'center',
    },
    labels:{
        color: '#fff',
    }
});