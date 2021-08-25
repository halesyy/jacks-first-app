import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
// import {GoogleSocialButton} from "react-native-social-buttons";
import tw from "tailwind-react-native-classnames"

export default function App() {
  let [hide, setHidden] = useState(false)

  return (
    <View style={tw`flex-1 items-center justify-center bg-red-400`}>
      <View style={tw.style(`bg-red-100 w-full flex justify-center h-20`, hide && "hidden")}>
        <Text style={tw`text-center`}>
          Izzy 😂
        </Text>
      </View>
      <View style={tw`bg-red-400 flex justify-center h-20 my-4 shadow-xl w-full`}>
        <Button title={hide?"Show":"Hide"} color="white" onPress={() => setHidden(!hide)} />
      </View>
      <View style={tw.style(`bg-red-100 w-full flex justify-center h-20`, hide && "hidden")}>
        <Text style={tw`text-center`}>
          Jack 💖
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
