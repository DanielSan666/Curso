import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import DrawerNavigation from './navigation/DrawerNavigation';
import LogoutButton from './screens/logout';
import CursoPage from './screens/curso';
import RegisterPage from './screens/register';
import profile from './screens/profile';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={DrawerNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Logout' component={LogoutButton} />
        <Stack.Screen name='Curso' component={CursoPage} />
        <Stack.Screen name='Register' component={RegisterPage} />
        <Stack.Screen name='Profile' component={profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
