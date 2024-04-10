import React from 'react'
import { Image, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
function PostHeader({username}) {
  return (
    <View style={{padding:10,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between',alignItems:'center',elevation:2}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{width:40,height:40,overflow:'hidden',borderRadius:40,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:'red',marginRight:10}}>
            <Image source={require('../../assets/hayato.jpg')} style={{resizeMode: "contain",height:50,width:50}}/>
            </View>
            <Text style={{fontSize:16}}>{username?username:'Dxter'}</Text>
        </View>
        <View>
            <Ionicons name="ellipsis-vertical-outline" size={24}/>
        </View>
    </View>
  )
}

export default PostHeader