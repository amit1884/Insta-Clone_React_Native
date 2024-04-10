import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, Pressable, View } from "react-native";
const screenWidth = Dimensions.get("window").width;
const numCol = 3;
function Thumbnail({ data }) {
  const navigation = useNavigation();
  const itemWidth = screenWidth / numCol;
  const onPressHandler = (id) => {
    navigation.navigate("Explore",{
        postId: id,
    });
  };
  return (
    <Pressable
      style={{ justifyContent: "flex-start" }}
      onPress={() => onPressHandler(data?.id)}
    >
      <Image
        source={data?.content}
        style={{
          width: itemWidth - 4,
          height: 120,
          resizeMode: "cover",
          margin: 2,
        }}
      />
    </Pressable>
  );
}

export default Thumbnail;
