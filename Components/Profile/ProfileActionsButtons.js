import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
function ProfileActionsButtons() {
  return (
    <View
      style={styles.container}
    >
      <Pressable style={styles.buttonStyle}>
        <Text style={{ color: "#fff" }}>Edit Profile</Text>
      </Pressable>
      <Pressable style={styles.buttonStyle}>
        <Text style={{ color: "#fff" }}>Share Profile</Text>
      </Pressable>
      <Pressable style={styles.iconBtnStyle}>
      <Ionicons name={'people'} size={20} color={'#fff'} />
      </Pressable>
    </View>
  );
}

export default ProfileActionsButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    columnGap: 10,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "#1877F2",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    flex: 2,
    alignItems: "center",
  },
  iconBtnStyle:{
    backgroundColor: "#1877F2",
    paddingVertical: 2.5,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
  }
});
