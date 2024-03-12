import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import SpecialButton from "./SpecialButton";

const ListItem = (props) => {
  return (
    <TouchableOpacity
      onLongPress={props.onPermDelete.bind(this, props.id)}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{props.title}</Text>
        <SpecialButton
          onPress={props.onPermDelete.bind(this, props.id)}
          source="Remove"
          style={[styles.buttonContainer]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    borderTopWidth: 1,
    borderColor: "#D2E0FB",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingHorizontal: 25,
  },
  itemText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 30,
    height: 30,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
  },
});

export default ListItem;
