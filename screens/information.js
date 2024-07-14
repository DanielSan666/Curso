import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../navigation/CustomHeader";
import Parallax from '../components/Parallax' // Ajusta la ruta según sea necesario

function InformationPage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Information Screen</Text>
        
        {/* Agrega el componente Parallax aquí */}
        <View style={styles.parallaxContainer}>
          <Parallax />
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200ee",
  },
  carouselContainer: {
    height: 200, // Altura deseada para el Carousel
    marginBottom: 20,
  },
  parallaxContainer: {
    height: 300, // Altura deseada para el Parallax
    borderWidth: 1, // Añadir borde temporalmente para depuración
    borderColor: 'red', // Color del bord
  },
});

export default InformationPage;
