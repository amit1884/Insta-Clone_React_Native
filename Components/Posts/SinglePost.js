import React from "react";
import { StyleSheet, View } from "react-native";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

function SinglePost() {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postDetails}>
        <PostHeader />
        <PostBody/>
        <PostFooter/>
      </View>
      <View style={styles.postLikes}></View>
      <View style={styles.postCommentConatiner}></View>
    </View>
  );
}

export default SinglePost;

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
  },
  postDetails: {},
  postHeader: {},
  postBody: {},
  postFooter: {},
  postLikes: {},
  postCommentConatiner: {},
});
