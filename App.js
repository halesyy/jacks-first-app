import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
// import {GoogleSocialButton} from "react-native-social-buttons";
import tw from "tailwind-react-native-classnames"

export default function App() {
  let [hide, setHidden] = useState(false)

  let Content = props => {
    return (
      <View style={tw.style(`bg-red-100 my-2 w-full flex justify-center h-20 shadow-xl`, hide && "hidden")}>
        <Text style={tw`text-center`}>
          {props.text}
        </Text>
      </View>
    )
  }

  return (
    <View style={tw`flex-1 items-center justify-center bg-red-400`}>
      <Content text="Jay" />
      <Content text="Jake" />
      <View style={tw`bg-red-400 flex justify-center h-20 my-2 shadow-xl w-full`}>
        <Button title={hide?"Show":"Hide"} color="white" onPress={() => setHidden(!hide)} />
      </View>
      <Content text="Jack" />
      <Content text="Jek" />
      <StatusBar style="auto" />
    </View>
  );
}
