import React from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import pythonImage from '../assets/images/Python.jpg';
import cppImage from '../assets/images/Cpp.png';
import JsImage from '../assets/images/Js.png';

function HomePage() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.section}>
        <Image source={pythonImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.heading}>Python</Text>
        <Text style={styles.subheading}>A subheading for this section, as long or as short as you like</Text>
        <Button title="Learn More" onPress={() => navigation.navigate('Curso', { course: 'Python' })} />
      </View>
      <View style={styles.section}>
        <Image source={cppImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.heading}>C++</Text>
        <Text style={styles.subheading}>A subheading for this section, as long or as short as you like</Text>
        <Button title="Learn More" onPress={() => navigation.navigate('Curso', { course: 'C++' })} />
      </View>
      <View style={styles.section}>
        <Image source={JsImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.heading}>Js</Text>
        <Text style={styles.subheading}>A subheading for this section, as long or as short as you like</Text>
        <Button title="Learn More" onPress={() => navigation.navigate('Curso', { course: 'Js' })} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 2, // Ajusta esto según la proporción de tus imágenes
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default HomePage;
