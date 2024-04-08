import React from "react";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../../assets/instagram-text-icon.png";
function HomeHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        backgroundColor: "#fff",
        alignItems: "center",
        overflow: "hidden",
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Image
          source={require("../../../assets/instagram-text-icon.png")}
          style={{ width: 120, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          columnGap:20
        }}
      >
        <Ionicons name="heart-outline" size={25} />
        <Ionicons name="send" size={25} style={{ transform: [{ rotate: '-45deg' }], marginTop: -5 }} />
      </View>
    </View>
  );
}

export default HomeHeader;
