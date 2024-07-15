// navigation/DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screens/home'; // Actualiza la ruta según sea necesario
import LogoutButton from '../screens/logout';
import profile from '../screens/profile';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name='Profile' component={profile} />
      <Drawer.Screen name="Logout" component={LogoutButton} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
