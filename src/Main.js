import React, { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SectionBar from "./SectionBar";
import StatusBar from "./StatusBar";
import ShoppingList from "./ShoppingList";

const ACTIVE_SECTION = "active";

const Main = (props) => {
  const { i18n } = useTranslation();

  const [listItemsActive, setListItemsActive] = useState([]);
  const [listItemsTaken, setListItemsTaken] = useState([]);
  const [currentSection, setCurrentSection] = useState(ACTIVE_SECTION);

  const selectedLanguage = i18n.language;

  // TODO Not efficient! Product should be add with sort rules, not added at the end and then array sort
  const addItemHandler = (product) => {
    setListItemsActive((prevList) => {
      const newList = [...prevList, product];
      newList.sort((a, b) => a.category_id.localeCompare(b.category_id));

      return newList;
    });
  };

  const removeItemHandler = (itemId) => {
    if (currentSection === ACTIVE_SECTION) {
      const removedItem = listItemsActive.find((item) => item.id === itemId);

      setListItemsActive((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
      setListItemsTaken((prevList) => [...prevList, removedItem]);
    } else {
      const removedItem = listItemsTaken.find((item) => item.id === itemId);

      setListItemsTaken((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
      setListItemsActive((prevList) => [...prevList, removedItem]);
    }
  };

  const removeItemPermanentlyHandler = (itemId) => {
    if (currentSection === ACTIVE_SECTION) {
      setListItemsActive((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
    } else {
      setListItemsTaken((prevList) =>
        prevList.filter((item) => item.id !== itemId)
      );
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      <StatusBar />

      <SectionBar
        setActiveSection={setCurrentSection}
        activeSection={currentSection}
      />

      {currentSection === ACTIVE_SECTION ? (
        <ShoppingList
          items={listItemsActive}
          onDelete={removeItemHandler}
          onPermDelete={removeItemPermanentlyHandler}
          language={selectedLanguage}
        />
      ) : (
        <ShoppingList
          items={listItemsTaken}
          onDelete={removeItemHandler}
          onPermDelete={removeItemPermanentlyHandler}
          language={selectedLanguage}
        />
      )}

      <AddItem
        onAddItem={addItemHandler}
        language={selectedLanguage}
        style={[styles.addButton, styles.buttonText]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#6FCFA7",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  addItemContainer: {},
  input: {},
  listItem: {},
  itemText: {},
});

export default Main;
