import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0090B0',
    padding: 15,
    margin:10,
    borderRadius:100,
    alignItems:'center',
    alignSelf:'center',
    paddingHorizontal:50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily:'SpaceMono',
  },
})
