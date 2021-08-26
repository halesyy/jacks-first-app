import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, SafeAreaView, Image} from 'react-native';
import tw from "tailwind-react-native-classnames"

// native base

export default function App() {
  let [hide, setHidden] = useState(false)

  return (
    <View style={tw`flex-1 bg-indigo-200 justify-center`} className="">
      <StatusBar style="auto" hidden={false} />
      <SafeAreaView>
        <View style={tw`p-4 py-14 bg-indigo-700 shadow-md border-t-2 border-b-2 border-indigo-900`}>
          <View>
            <Image
              style={tw.style("shadow-xl m-auto mb-2 border-2 border-indigo-900 rounded-full bg-indigo-800", {marginTop: -220, width: 200, height: 200})}
              source={require("./assets/undraw_nature_m5ll.png")}
            />
          </View>
          <Text style={tw.style(`text-indigo-100 text-center`, {fontSize: 42})}>
            Welcome...
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
