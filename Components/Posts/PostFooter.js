import React from 'react'
import { View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
function PostFooter() {
  return (
    <View style={{padding:10,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',elevation:2}}>
        <View style={{flexDirection:'row',flex:1,columnGap:10}}>
        <Ionicons name="heart-outline" size={24}/>
        <Ionicons name="chatbubble-outline" size={24}/>
        <Ionicons name="send" size={22} style={{ transform: [{ rotate: '-45deg' }], marginTop: -5 }} />
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
        <Ionicons name="bookmark-outline" size={24}/>
        </View>
    </View>
  )
}

export default PostFooter