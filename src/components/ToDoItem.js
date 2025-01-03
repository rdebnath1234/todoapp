import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/reducers/todoSlice';
const ToDoItem = ({item}) => {
    const dispatch = useDispatch();
    const deleteHandle = async () => {
        dispatch(deleteTodo({id:item?.id}));
    }
  return (
    <View style={styles.container}>
        <View style={styles.infocontainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.desc}>{item?.desc}</Text>
        </View>
        <View style={styles.actioncontainer}>
        <AntDesign name="edit" size={24} color="#f8f8f8" onPress={()=>{}} />
        <Entypo name="trash" size={24} color="#f8f8f8" onPress={deleteHandle}/>
        </View>
    </View>
  )
}

export default ToDoItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor:'#ccc',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent:'space-between',
  },
    title: {
        fontSize: 32,
        color:'#000',
    },
    desc:{
        fontSize:20,
        color:'#000',
    },
    infocontainer:{
        padding:10,
    },
    actioncontainer:{
        padding:10,
        flexDirection:'row',
        margin:10,
        justifyContent:'space-between',
    },
})
