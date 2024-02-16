import React, { useState } from "react";
import ListItem from './ListItem';
import AddItem from './AddItem';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SectionBar from "./SectionBar";



const Main = () => {
  const [listItemsActive, setListItemsActive] = useState([]);
  const [listItemsTaken, setListItemsTaken] = useState([]);
  const [currentSection, setCurrentSection] = useState('active');


  const addItemHandler = (itemTitle) => {
    if (currentSection === 'active') {
      setListItemsActive(prevList => [
        ...prevList,
        { id: new Date().getTime().toString(), value: itemTitle }
      ]);
    }
    else {
      setListItemsTaken(prevList => [
        ...prevList,
        { id: new Date().getTime().toString(), value: itemTitle }
      ]);
    }
  };



  const removeItemHandler = (itemId) => {
    if (currentSection === 'active') {
      setListItemsActive(prevList => {
        prevList.filter(item => item.id !== itemId)
      });
    }
    else {
      setListItemsTaken(prevList => {
        prevList.filter(item => item.id !== itemId)
      });
    }
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

      <SectionBar setActiveSection={setCurrentSection}/>

      {currentSection === 'active' 
      ? 
      (
        <FlatList
          data={listItemsActive}
          renderItem={itemData => (
            <ListItem
              id={itemData.item.id}
              title={itemData.item.value}
              onDelete={removeItemHandler}
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