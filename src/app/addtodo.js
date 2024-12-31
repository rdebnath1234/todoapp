import { View, Text,StyleSheet, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton'
const Addtodo = () => {
  const [value,setValue] = React.useState('')
  const [desc,setDesc] = React.useState('')
  const submit =async () => {
      if(value.trim() == '' || desc.trim() == ''){
        Alert.alert('Please fill all the fields');
        return;
      }
  }
  return (
    <View style={styles.container}>
      <CustomHeader title="Add New ToDo" isBackButton={true}/>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder="Enter your todo here"
      style={styles.input} />
      <TextInput
      value={desc}
      onChangeText={setDesc}
      numberOfLines={4}
      multiline={true}
      maxLength={100}
      placeholder="Enter your description here"
      style={[styles.input,{minHeight:120}]} />
      <CustomButton title="ADD" onPress={submit}/>
    </View>
  )
}

export default Addtodo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    borderWidth:1,
    padding:10,
    borderColor:'#0090B0',
    margin:10,
    borderRadius:10,
    fontSize:20,
  },
})
