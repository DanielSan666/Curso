// CursoPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { courseData } from '../screens/courseData'; // Ajusta la ruta según tu estructura de proyecto

function CursoPage({ route }) {
  const navigation = useNavigation();
  const { course } = route.params;
  const courseInfo = courseData[course];

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
});

export default CursoPage;
