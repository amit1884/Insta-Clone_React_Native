import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SinglePost from "../../Components/Posts/SinglePost";
import { posts } from "../../constants/appConstants";

function Explore({ route }) {
  const { postId } = route.params;
  const flatListRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [postLists, setPostLists] = useState(posts);
  useEffect(() => {
    setLoading(true);
    if (postId) {
      const index = postLists.findIndex((item) => item.id === postId);
      if (index !== -1) {
        const removedItem = postLists.splice(index, 1)[0];
        postLists.unshift(removedItem);
        setLoading(false);
      }
    }
  }, [postId]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {!loading && (
          <FlatList
            ref={flatListRef}
            data={postLists}
            renderItem={({ item }) => <SinglePost data={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default Explore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
