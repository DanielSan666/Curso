import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { courseData } from './courseData';

function CursoPage({ route }) {
  const navigation = useNavigation();
  const { course } = route.params;
  const courseInfo = courseData[course];

  // Función para manejar el inicio del flujo de pago
  const handleCheckout = async () => {
    try {
      // Realiza una solicitud al backend para crear una sesión de checkout en Stripe
      const response = await fetch('http://localhost:5000/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course }),
      });

      const session = await response.json();

      // Abre la URL de Stripe para el pago en el navegador externo
      if (session && session.url) {
        Linking.openURL(session.url);
      } else {
        throw new Error('No se pudo iniciar el pago');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
      console.log(courseInfo);
      Alert.alert('Error', 'No se pudo iniciar el pago. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#6200ee" />
      </TouchableOpacity>
      <Text style={styles.title}>{course}</Text>
      {courseInfo ? (
        <View style={styles.courseDetails}>
          <Text style={styles.description}>{courseInfo.description}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Duración:</Text> {courseInfo.duration}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Nivel:</Text> {courseInfo.level}</Text>
          {/* Otros detalles del curso */}

          {/* Botón de Checkout */}
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.buttonText}>Iniciar Pago</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.error}>Información del curso no disponible</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courseDetails: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CursoPage;
