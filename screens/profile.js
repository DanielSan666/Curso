import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        setCourses(response.data.courses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#6200ee" />;
  }

  if (error) {
    return <Text>Error fetching profile data: {error.message}</Text>;
  }

  if (!user) {
    return <Text>No user data found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.detail}><Text style={styles.label}>Username:</Text> {user.username}</Text>
      <Text style={styles.detail}><Text style={styles.label}>Email:</Text> {user.email}</Text>
      <Text style={styles.title}>Cursos Inscritos</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseDetail}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  courseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDetail: {
    fontSize: 16,
  },
});
