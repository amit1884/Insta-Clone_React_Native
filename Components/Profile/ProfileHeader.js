import React from "react";
import { Image, Text, View } from "react-native";

function ProfileHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/djalok.jpg")}
            style={{
              width: 80,
              height: 80,
              resizeMode: "cover",
              borderRadius: 80,
            }}
          />
        </View>
        <Text>djalok</Text>
      </View>
      <View style={{ flexDirection: "row", columnGap: 20 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 15,fontWeight:500 }}>0</Text>
          <Text style={{ fontSize: 15,fontWeight:500 }}>Posts</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 15,fontWeight:500 }}>0</Text>
          <Text style={{ fontSize: 15,fontWeight:500 }}>Followers</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 15,fontWeight:500 }}>0</Text>
          <Text style={{ fontSize: 15,fontWeight:500 }}>Following</Text>
        </View>
      </View>
    </View>
  );
}

export default ProfileHeader;
