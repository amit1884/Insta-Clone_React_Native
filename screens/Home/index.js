import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import HomeHeader from "../../Components/Home/HomeHeader";
import SinglePost from "../../Components/Posts/SinglePost";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.content]}>
          <HomeHeader />
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
