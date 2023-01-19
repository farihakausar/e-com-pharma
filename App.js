import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EvilIcons from "react-native-vector-icons/EvilIcons"

import Screen from './components/Screen';
import DrugDetail from './components/DrugDetail';
import Login from "./components/Login"
import Mycart from './components/Mycart';
import Pharmacy from "./components/Pharmacy"

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
   
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Mycart" component={Mycart} />
        <Stack.Screen name="DrugDetail" component={DrugDetail} />
        <Stack.Screen name="Pharmacy" component={Pharmacy} options={({ navigation }) => ({
    title: 'Pharmacy',
    headerRight: () => (
      <EvilIcons   onPress={() => navigation.navigate('Mycart')}name='cart' size={30} color=""/>
    ),
  })} />
      </Stack.Navigator>
  </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
