import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Search from "./screens/Search";
import AddPosts from "./screens/AddPosts";
import Reels from "./screens/Reels";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon:()=><Ionicons
            name='home'
            size={25} 
          />,
          tabBarShowLabel:false
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
            tabBarIcon:()=><Ionicons
            name='search'
            size={25} 
          />,
          tabBarShowLabel:false
          }}
        />
        <Tab.Screen
          name="AddPosts"
          component={AddPosts}
          options={{
            headerShown: false,
            tabBarIcon:()=><Ionicons
            name='add'
            size={25} 
          />,
          tabBarShowLabel:false
          }}
        />
        <Tab.Screen
          name="Reels"
          component={Reels}
          options={{
            headerShown: false,
            tabBarIcon:()=><Ionicons
            name='tv'
            size={25} 
          />,
          tabBarShowLabel:false
          }}
        />
         <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon:()=><Ionicons
            name='person'
            size={25} 
          />,
          tabBarShowLabel:false
          }}
        />
      </Tab.Navigator>
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
