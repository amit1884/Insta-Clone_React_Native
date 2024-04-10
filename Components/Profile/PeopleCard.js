import React from "react";
import { Image, Pressable, Text, View, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
function PeopleCard() {
  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        width: 150,
        padding: 10,
      }}
    >
      <View>
        <Image
          source={require("../../assets/pickachu.png")}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: 600 }}>Username</Text>
        <Text style={{ textAlign: "center" }}>
          Followed by amit1884 +4 more
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#1877F2",
            paddingHorizontal: 40,
            paddingVertical: 5,
            borderRadius:4
          }}
        >
          <Text style={{ color: "#fff" }}>Follow</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PeopleCard;
