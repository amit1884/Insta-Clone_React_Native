import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import Thumbnail from "../../Components/Posts/Thumbnail";
import { posts } from "../../constants/appConstants";

const numCol = 3;
function Search() {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <FlatList
            data={posts}
            renderItem={({ item }) => <Thumbnail data={item} />}
            keyExtractor={(item) => item.id}
            numColumns={numCol}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#9Bd35A", "#689F38"]}
                tintColor={"#689F38"} // Android
                title={"Loading..."} // iOS
                titleColor={"#689F38"} // iOS
              />
            }
            ListFooterComponent={
              isLoadingMore && (
                <View style={styles.loaderContainer}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              )
            }
          />
        </View>
    </SafeAreaView>
  );
}

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  searchInput: {
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
