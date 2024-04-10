import React from "react";
import { useNavigation } from '@react-navigation/native'
import { Image, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../../assets/instagram-text-icon.png";
function HomeHeader() {
  const navigation = useNavigation();
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
          columnGap: 20,
        }}
      >
        <Pressable>
          <Ionicons name="heart-outline" size={25} />
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Settings')}>
          <Ionicons
            name="send"
            size={25}
            style={{ transform: [{ rotate: "-45deg" }], marginTop: -5 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default HomeHeader;
