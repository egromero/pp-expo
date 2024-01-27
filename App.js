import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button.js'
import CodeInput from './components/codeInput.js'

export default function App() {
  const [value, setValue] = useState(' ')
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    <View style={styles.buttonContainer}>
      <CodeInput value={value} setValue={setValue}/>
      <Button text="Ingresar" icon="enter" onPress={()=>{alert(`${value}`)}}/>
      <Button text="Crear Sala" icon="create-outline" onPress={()=>{alert("hola grupo")}}/>
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
