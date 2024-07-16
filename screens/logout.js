import React from 'react';
import { Button, View, Alert } from 'react-native';
import { logout } from '../API/API'; // Asegúrate de importar la función logout

const LogoutButton = ({ navigation }) => {
  const handleLogout = async () => {
    const success = await logout();

    if (success) {
      // Logout exitoso, redirige al usuario a la pantalla de login
      navigation.navigate('Login');
    } else {
      // Error en el logout
      Alert.alert('Error', 'No se pudo cerrar sesión.');
    }
  };

  return (
    <View>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

export default LogoutButton;
