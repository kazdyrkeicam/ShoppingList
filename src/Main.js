import React, { useState } from "react";
import ListItem from './ListItem';
import AddItem from './AddItem';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SectionBar from "./SectionBar";


const ACTIVE_SECTION = 'active';


const Main = () => {
  const [listItemsActive, setListItemsActive] = useState([]);
  const [listItemsTaken, setListItemsTaken] = useState([]);
  const [currentSection, setCurrentSection] = useState(ACTIVE_SECTION);


  const addItemHandler = (itemTitle) => {
    setListItemsActive(prevList => [
      ...prevList,
      { id: new Date().getTime().toString(), value: itemTitle }
    ]);
  };



  const removeItemHandler = (itemId) => {
    if (currentSection === ACTIVE_SECTION) {
      const removedItem = listItemsActive.find(item => item.id === itemId);
      
      setListItemsActive(prevList => prevList.filter(item => item.id !== itemId));
      setListItemsTaken(prevList => [...prevList, removedItem]);
    }
    else {
      const removedItem = listItemsTaken.find(item => item.id === itemId);

      setListItemsTaken(prevList => prevList.filter(item => item.id !== itemId));
      setListItemsActive(prevList => [...prevList, removedItem]);
    }
  };


  const removeItemPermanentlyHandler = itemId => {
    console.log("here we are");
    if (currentSection === ACTIVE_SECTION) {
      setListItemsActive((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
    } else {
      setListItemsTaken((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image 
          source={require('./../assets/icons8-basket-100.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Shopping List</Text>
      </View>
      
      <AddItem onAddItem={addItemHandler}/>
      <SectionBar setActiveSection={setCurrentSection}/>

      {currentSection === ACTIVE_SECTION
      ? 
      (
        <FlatList
          data={listItemsActive}
          renderItem={itemData => (
            <ListItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeItemHandler}
              onPermDelete={removeItemPermanentlyHandler}
            />
          )}
        />
      ) 
      : 
      (
        <FlatList
          data={listItemsTaken}
          renderItem={itemData => (
            <ListItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeItemHandler}
              onPermDelete={removeItemPermanentlyHandler}
            />
          )}
        />
      )}
    
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