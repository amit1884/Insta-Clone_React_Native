import React from "react";
import { ScrollView, Text, View } from "react-native";
import PeopleCard from "./PeopleCard";

function Discover() {
  return (
    <View>
      <Text style={{paddingHorizontal:10,fontSize:16,fontWeight:500}}>Discover People</Text>
      <ScrollView horizontal contentContainerStyle={{padding:10}}>
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
      </ScrollView>
    </View>
  );
}

export default Discover;
