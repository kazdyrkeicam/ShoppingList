import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SearchItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.title)}
      style={props.style}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SearchItem;
