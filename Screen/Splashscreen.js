import { View, Text,Image } from 'react-native'
import React from 'react'
import Color, { Icon } from '../assets/Icon'
const Splashscreen = () => {
    // Global Varibale Creation Name Icon and Color
  return (
    <View  style={{height:'100%',width:"100%",backgroundColor:Color.green,justifyContent:"center",alignItems:"center"}}>
      <Image 
      source={Icon.Logo}
      />
      {/* <Text>Splashscreen</Text> */}
    </View>
  )
}

export default Splashscreen