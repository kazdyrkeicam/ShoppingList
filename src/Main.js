import React, { useState } from "react";
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';



const Main = () => {
  const [listItems, setListItems] = useState([]);

  const addItemHandler = (itemTitle) => {
    setListItems(currentItems => [
      ...currentItems,
      { id: new Date().getTime().toString(), value: itemTitle }
    ])
  };


  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image 
          source={require('./../assets/icons8-basket-100.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Shopping List</Text>
      </View>
      
      <AddItem
        onAddItem={addItemHandler}
        
      />

      <FlatList
        data={listItems}
        renderItem={itemData => (
          <ShoppingList
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#D2E0FB'
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  addItemContainer: {

  },
  input: {

  },
  listItem: {

  },
  itemText: {
    
  },
});


export default Main;