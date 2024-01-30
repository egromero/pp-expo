import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/landing.js';
import CreateRoom from './screens/createRoom.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            options={{ headerShown: false }}
            component={Landing}
            />
          <Stack.Screen name="CreateRoom" options={{ headerShown: false }} component={CreateRoom} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}