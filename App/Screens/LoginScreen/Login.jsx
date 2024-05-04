import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';

export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: Colors.WHITE }}>
      <Image source={require('./../../../assets/login.png')} style={styles.loginImage} />
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>
          Let's Find
          <Text style={styles.boldText}> Professional Cleaning And Repair </Text> service
        </Text>
        <Text style={styles.descriptionText}>
          Best App to find services near you which deliver professional service
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Button Click")}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    color: Colors.WHITE,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.WHITE,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 17,
    color: Colors.PRIMARY,
  },
});
