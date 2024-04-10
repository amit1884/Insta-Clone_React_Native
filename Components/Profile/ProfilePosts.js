import React, { useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";
import { posts } from "../../constants/appConstants";
import Thumbnail from "../Posts/Thumbnail";
import SinglePost from "../Posts/SinglePost";
const numCol = 3;
function ProfilePosts() {
  const [index, setIndex] = useState(0);

  // Define your tab routes
  const [routes] = useState([
    { key: "posts", title: "Posts", icon: "home" },
    { key: "reels", title: "Highlights", icon: "tv" },
    { key: "tags", title: "Highlights", icon: "people" },
  ]);

  // Define your render scene function
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "posts":
        return (
          <Image
            source={require("../../assets/djalok.jpg")}
            style={{ height: 400 }}
          />
        );
      case "reels":
        return (
          <View>
            <Text>Reel Content</Text>
          </View>
        );
      case "tags":
        return (
          <View>
            <Text>Tagged Content</Text>
          </View>
        ); // Replace with your highlights content
      default:
        return null;
    }
  };

  // Define your render tab bar function
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name={route.icon} size={24} color={color} />
        </View>
      )}
      indicatorStyle={{ backgroundColor: "blue" }}
      style={{ backgroundColor: "white" }}
      activeColor={"blue"}
      inactiveColor={"black"}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
}

export default ProfilePosts;
