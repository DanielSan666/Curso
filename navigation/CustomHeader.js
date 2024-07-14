import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.navbarTitle}>Cursos</Text>
      <View style={styles.navItems}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Features')}>
          <Text style={styles.navItem}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pricing')}>
          <Text style={styles.navItem}>Pricing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.navItem}>About</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#e3f2fd',
    padding: 10,
  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
    color: '#6200ee',
  },
});

export default CustomHeader;
