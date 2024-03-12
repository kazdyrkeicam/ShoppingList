import React from "react";
import { FlatList, View, Text } from "react-native";
import ListItem from "./ListItem";

const ShoppingList = (props) => {
  return (
    <FlatList
      data={props.items}
      renderItem={(itemData) => (
        <ListItem
          id={itemData.item.id}
          title={itemData.item.name[props.language]}
          onDelete={props.onDelete}
          onPermDelete={props.onPermDelete}
        />
      )}
    />
  );
};

export default ShoppingList;
