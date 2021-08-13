import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GoogleSocialButton } from "react-native-social-buttons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Jacks cool little iOS app!</Text>
      <View style={{marginTop: 15}}>
        <Button title="Test" color="red" />
      </View>
      <GoogleSocialButton />
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
