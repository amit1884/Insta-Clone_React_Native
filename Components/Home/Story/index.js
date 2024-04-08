import React from 'react'
import { ScrollView } from 'react-native-web'
// import { storyList } from '../../../constants/appConstants'
import StoryIcon from './StoryIcon'

function Story() {
  return (
    <ScrollView>
        {
            storyList?.map((story,index)=>{
                return<StoryIcon image={story?.user?.profile} key={index}/>
            })
        }
    </ScrollView>
  )
}

export default Story