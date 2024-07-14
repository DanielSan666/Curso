import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InformationPage from './screens/information';
import Login from './screens/login';
import DrawerNavigation from './navigation/DrawerNavigation';
import LogoutButton from './screens/logout';
import CursoPage from './screens/curso';
import RegisterPage from './screens/register';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Information" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Information" component={InformationPage} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={DrawerNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Logout' component={LogoutButton} />
        <Stack.Screen name='Curso' component={CursoPage} />
        <Stack.Screen name='Register' component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
