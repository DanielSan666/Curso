import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.navbarTitle}>Cursos</Text>
      <View style={styles.navActions}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navAction}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.navAction}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 10,
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"white"
  },
  navItems: {
    flexDirection: 'row',
  },
  navItem: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  navActions: {
    flexDirection: 'row',
  },
  navAction: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'white',
  },
});

export default CustomHeader;