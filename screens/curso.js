import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { courseData } from './courseData';

function CursoPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { course, success, canceled } = route.params || {};

  const courseInfo = courseData[course];

  const amountPago= 40

  useEffect(() => {
    if (success) {
      Alert.alert('Pago Exitoso', 'Tu pago ha sido procesado exitosamente.');
    }
    if (canceled) {
      Alert.alert('Pago Cancelado', 'El pago ha sido cancelado.');
    }
  }, [success, canceled]);

  const paymentDetails = {
    purchase_description: course,
    currency: 'MXN',
    amount: 40,
    metadata: {
      me_reference_id: `123 `,
      customer_info: {
          name: '',
          email: '',
          phone: '',
      }
    },
    redirect_url: {
      success: "https://bufaloscafe.wuaze.com/Menu",
      error: "https://bufaloscafe.wuaze.com/Menu",
      default: "https://bufaloscafe.wuaze.com/Menu",
   },
    override_settings: {
      payment_method: ["CARD"],
    },
  webhook_url: "https://marketplace-rose-three.vercel.app/api/pedidos/WebHook"
     
    // Asegúrate de ajustar esta estructura según la información requerida por Clip
    // Otros detalles necesarios para el pago, según lo requerido por el SDK de Clip
  };

  const handleCheckoutClip = async () => {
    try {
      const response = await fetch('http://192.168.1.86:5000/api/payment-clip', { // Asegúrate de cambiar la IP según sea necesario
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( paymentDetails),
      });

      console.log(paymentDetails)
      const session = await response.json();

      if (session && session.payment_request_url) {
        Linking.openURL(session.payment_request_url);
      } else {
        throw new Error('No se pudo iniciar el pago');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
      Alert.alert('Error', 'No se pudo iniciar el pago. Inténtalo de nuevo más tarde.');
    }
  };


  const handleCheckoutStripe = async () => {
    try {
      const response = await fetch('http://192.168.1.86:5000/api/payment-stripe', { // Asegúrate de cambiar la IP según sea necesario
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( {course, amountPago}),
      });
      const session = await response.json();

      if (session && session.url) {
        Linking.openURL(session.url);
      } else {
        throw new Error('No se pudo iniciar el pago');
      }
    } catch (error) {
      console.error('Error al iniciar el pago:', error);
      Alert.alert('Error', 'No se pudo iniciar el pago. Inténtalo de nuevo más tarde.');
    }
  };

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#6200ee" />
      </TouchableOpacity>
      <Text style={styles.title}>{course}</Text>
      {courseInfo ? (
        <View style={styles.courseDetails}>
          <Text style={styles.description}>{courseInfo.description}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Duración:</Text> {courseInfo.duration}</Text>
          <Text style={styles.detail}><Text style={styles.label}>Nivel:</Text> {courseInfo.level}</Text>


          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckoutStripe}>
            <Text style={styles.buttonText}>Iniciar Pago con Stripe</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.checkoutButtonClip} onPress={handleCheckoutClip}>
            <Text style={styles.buttonTextClip}>Iniciar Pago con Clip</Text>
            
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
  buttonTextClip: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkoutButtonClip: {
    backgroundColor: '#FC4C02',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default CursoPage;
