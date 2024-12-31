import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
const Home = () => {
  const data = useSelector(state => state.todo.data)
  console.log(data)
  return (
    <View style={styles.container}>
      <CustomHeader title="ToDo App"/>
      <AddButton/>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
