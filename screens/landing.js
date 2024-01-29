import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CodeInput from '../components/codeInput.js'
import Button from '../components/button.js'


export default function Landing({ navigation }) {
    const [value, setValue] = useState(' ')
    return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <CodeInput value={value} setValue={setValue}/>
            <Button text="Ingresar" icon="enter" onPress={()=>{alert(`${value}`)}}/>
            <Button text="Crear Sala" icon="create-outline" onPress={() => navigation.navigate('CreateRoom') }/>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  