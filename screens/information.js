import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../navigation/CustomHeader";

function InformationPage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
    <View style={{ marginTop: 35 }}>
      <CustomHeader navigation={navigation} />
    </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Information Screen</Text>

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
  },
});

export default InformationPage;