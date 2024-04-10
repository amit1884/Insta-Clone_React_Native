import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import ProfilePosts from "../../Components/Profile/ProfilePosts";
import ProfileHeader from "../../Components/Profile/ProfileHeader";
import ProfileActionsButtons from "../../Components/Profile/ProfileActionsButtons";
import Discover from "../../Components/Profile/Discover";
import Hightlights from "../../Components/Profile/Hightlights";

function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} nestedScrollEnabled>
        <View style={{ flex: 1 }}>
          <ProfileHeader/>
          <ProfileActionsButtons/>
          <Discover/>
          <Hightlights/>
          <View style={{flex:1}}>
          <ProfilePosts />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
