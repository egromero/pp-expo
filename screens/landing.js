import { useState } from 'react';
import { Keyboard, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CodeInput from '../components/codeInput.js'
import Button from '../components/button.js'


export default function Landing({ navigation }) {
    const [code, setCode] = useState(' ')

    const searchRoom = () => {
        fetch('https://cc0e-107-190-74-83.ngrok-free.app/room/create', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({code}),
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CodeInput value={code} setValue={setCode}/>
                <Button text="Ingresar" icon="enter" onPress={searchRoom}/>
                <Button text="Crear Sala" icon="create-outline" onPress={() => navigation.navigate('CreateRoom') }/>
            </View>
        </View>
    </TouchableWithoutFeedback>  
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f4daa',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  