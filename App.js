import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Home from "./screens/Home";
import Search from "./screens/Search";
import AddPosts from "./screens/AddPosts";
import Reels from "./screens/Reels";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import Settings from "./screens/Settings";
import Explore from "./screens/Explore";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabNavigator = () => (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" size={25} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="search" size={25} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="AddPosts"
        component={AddPosts}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="add" size={25} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="tv" size={25} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="person" size={25} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal', 
        ...TransitionPresets.SlideFromRightIOS 
      }}
      >
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Explore" component={Explore} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
