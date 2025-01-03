import { View, Text,StyleSheet, FlatList,Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'
import ToDoItem from '../components/ToDoItem'
const Home = () => {
  const data = useSelector(state => state.todo.data)
  //console.log(data)
  const renderTodoItem = ({item}) => {
    return (
      <ToDoItem item={item}/>
    )
  }
  return (
    <View style={styles.container}>
      <CustomHeader title="ToDo App"/>
      <FlatList
       data={data}
       renderItem={renderTodoItem}
       ListEmptyComponent={
        <View style={{justifyContent:'center',alignItems:'center',marginTop:200}}>
          <Image source={require('../assets/images/no-data.png')} style={{width:200,height:200}}/>
          <Text style={{textAlign:'center',fontSize:20}}>No ToDo Found</Text>
        </View>
       }
       initialNumToRender={10}
       windowSize={10}
       key={item=>item?.id}
       keyExtractor={item=>item?.id}
       showsVerticalScrollIndicator={false}
      />
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
  title: {
    fontSize: 32,
    color:'#fff',
  },
  desc:{
    fontSize:20,
    color:'#fff',
  }
})
