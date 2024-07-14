import React from 'react';
import { Button, View, Alert } from 'react-native';

const LogoutButton = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout', { // Cambia la URL según sea necesario
        method: 'POST',
        credentials: 'include', // Importante para enviar y recibir cookies
      });

      if (response.ok) {
        // Logout exitoso, redirige al usuario a la pantalla de login
        navigation.navigate('Information');
      } else {
        // Error en el logout
        Alert.alert('Error', 'No se pudo cerrar sesión.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Ocurrió un error al cerrar sesión.');
    }
  };

  return (
    <View>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

export default LogoutButton;
