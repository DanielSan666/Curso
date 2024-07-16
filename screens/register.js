import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { register } from '../API/API';

function RegisterPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const success = await register(username, email, password); // Espera el resultado de la función register
    if (success) {
      navigation.navigate('Login');
    } else {
      console.log("Datos incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#6200ee" style={{ marginTop: 35 }} />
      </TouchableOpacity>
      <Text>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} color="#6200ee" />
        <View style={styles.buttonSpacer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} color="#6200ee" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 12, // Optional: Add some margin at the top of the button container if needed
  },
  buttonSpacer: {
    marginTop: 10, // Adds space between the buttons
  },
});

export default RegisterPage;
