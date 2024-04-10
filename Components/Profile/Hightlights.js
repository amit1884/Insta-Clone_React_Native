import React from "react";
import { ScrollView, Text, View } from "react-native";

function Hightlights() {
  return (
    <View>
      <Text style={{paddingHorizontal:10,fontSize:16,fontWeight:500}}>Hightlights</Text>
      <ScrollView horizontal contentContainerStyle={{ padding: 10,columnGap:5 }}>
        <View
          style={{ width: 80, height: 80, borderWidth: 1, borderRadius: 80 }}
        ></View>
        <View
          style={{ width: 80, height: 80, borderWidth: 1, borderRadius: 80 }}
        ></View>
        <View
          style={{ width: 80, height: 80, borderWidth: 1, borderRadius: 80 }}
        ></View>
        <View
          style={{ width: 80, height: 80, borderWidth: 1, borderRadius: 80 }}
        ></View>
      </ScrollView>
    </View>
  );
}

export default Hightlights;
