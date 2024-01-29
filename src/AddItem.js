import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import CurvedButton from "./SpecialButton";


const AddItem = ( props ) => {
  const [itemName, setItemName] = useState('');

  const itemAddHandler = () => {
    props.onAddItem(itemName);
    setItemName("");
  };


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
        style={styles.inputTextItem}
      />
      <CurvedButton title={"Add Item"} onPress={itemAddHandler}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputTextItem: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    paddingLeft: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  addItemButton: {
    backgorundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  }
});



export default AddItem;