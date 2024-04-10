import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
function PostBody({ img }) {
  return (
    <View style={styles.postContainer}>
      <Image
        source={img ? img : require("../../assets/pickachu.png")}
        style={{
          width: screenWidth,
          height: screenHeight / 2,
          resizeMode: "cover",
        }}
      />
      <View style={styles.overlay}></View>
    </View>
  );
}

export default PostBody;

const styles = StyleSheet.create({
  postContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0,
    left: 0,
    top: 0,
    zIndex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
