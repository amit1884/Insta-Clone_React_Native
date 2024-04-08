import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function PostBody() {
  return (
    <View style={styles.postContainer}>
        <Image source={require('../../assets/pickachu.png')} style={{resizeMode:'contain'}}/>
        {/* <View style={styles.overlay}></View> */}
    </View>
  )
}

export default PostBody

const styles=StyleSheet.create({
    postContainer:{
        position:'relative',
        justifyContent:'center',alignItems:'center'
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'black',
        opacity:0.5,
        left:0,
        top:0,
        zIndex:10,
        alignItems:'center',
        justifyContent: 'center',
    }
})