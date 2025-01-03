import { View, Text, StyleSheet, TextInput, Modal } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/reducers/todoSlice";
import CustomButton from "./CustomButton";
const ToDoItem = ({ item }) => {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState(item?.title);
  const [desc, setDesc] = React.useState(item?.desc);
  const dispatch = useDispatch();
  const deleteHandle = async () => {
    dispatch(deleteTodo({ id: item?.id }));
  };
  const onUpdate = async () => {
    dispatch(
      updateTodo({
        id: item?.id,
        title: value,
        desc: desc,
      })
    );
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.infocontainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.desc}>{item?.desc}</Text>
      </View>
      <View style={styles.actioncontainer}>
        <AntDesign
          name="edit"
          size={24}
          color="#f8f8f8"
          onPress={() => {
            setVisible(true);
          }}
        />
        <Entypo name="trash" size={24} color="#f8f8f8" onPress={deleteHandle} />
      </View>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalcontainer}>
          <View style={{backgroundColor: "#fff", margin: 50, padding: 20, borderRadius: 10}}>
          <AntDesign name="closecircle" style={styles.closeIcon} size={24} color="black" onPress={() => setVisible(false)} />
            <TextInput
              value={value}
              onChangeText={setValue}
              placeholder="Enter your todo here"
              style={styles.input}
            />
            <TextInput
              value={desc}
              onChangeText={setDesc}
              numberOfLines={4}
              multiline={true}
              maxLength={100}
              placeholder="Enter your todo description here"
              style={[styles.input, { minHeight: 120 }]}
            />
            <CustomButton title="UPDATE" onPress={onUpdate} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ToDoItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    color: "#000",
  },
  desc: {
    fontSize: 20,
    color: "#000",
  },
  infocontainer: {
    padding: 10,
  },
  actioncontainer: {
    padding: 10,
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent:"center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#0090B0",
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 20,
    marginTop: 30,
  },
  closeIcon:{
    position:'absolute',
    top:10,
    right:10,
  },
});
