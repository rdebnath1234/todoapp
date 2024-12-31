import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useFonts } from 'expo-font'
import Logo from '../assets/images/icon.png'
import { screenHight, screenWidth } from '../utils/Constant'
import { resetAndNavigate } from '../utils/Helpers'
const Main = () => {
  const [loaded]= useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })
  const [hasNavigated,setHasNavigated]= React.useState(false)
  useEffect(()=>{
    if(loaded && !hasNavigated){
      const timeoutId= setTimeout(()=>{
        resetAndNavigate('/home')
      },1000);
      return ()=>clearTimeout(timeoutId)
    }
  },[loaded,hasNavigated])
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: screenWidth * 0.3,
    height: screenHight * 0.12,
  }
})