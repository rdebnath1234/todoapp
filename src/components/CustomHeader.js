import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
const CustomHeader = ({title,isBackButton}) => {
  return (
      <SafeAreaView style={styles.container}>
        <View>
        <Text style={styles.title}>{title}</Text>
        {isBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={32} color="#fff" />
        </TouchableOpacity>)}
        </View>
      </SafeAreaView>
  )
}

export default CustomHeader;
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: '#0090B0',
    padding: 25,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily:'SpaceMono',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 0,
  }
})
