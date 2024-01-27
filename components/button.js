import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function Button({ text, onPress, icon, theme}) {
  return (
    <View style={styles.buttonContainer}>
          <Pressable onPress={onPress} style = {styles.button}>
              <Ionicons
              name={icon}
              size={18}
              color="#25292e"
              style={styles.buttonIcon}/>
              <Text style = {styles.buttonLabel}>{text}</Text>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#25292e',
      fontSize: 16,
    },
    buttonContainer:{
      borderRadius: 18, 
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button:{
      backgroundColor: "#fff",
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }
  });