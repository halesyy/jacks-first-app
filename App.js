import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GoogleSocialButton } from "react-native-social-buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Izzy's sick as iOS app!</Text>
      <View style={{marginTop: 15}}>
        <Button title="Test" />
      </View>
      <GoogleSocialButton onPress={() => console.log("hi")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
