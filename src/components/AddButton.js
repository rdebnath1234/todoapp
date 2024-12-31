import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';
const AddButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => router.navigate('/addtodo')}>
        <FontAwesome6 name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  )
}

export default AddButton
const styles = StyleSheet.create({
   button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#0090B0',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 120,
    right: 20,
    shadowColor: "#000",
   },
})
