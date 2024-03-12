import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text } from "react-native";

const SpecialButton = (props) => {
  const iconSource =
    props.source === "Remove"
      ? require("./../assets/icons8-delete-48.png")
      : require("./../assets/icons8-plus-100.png");

  const handlePress = () => {
    props.onPress();

    if (props.onSecondPress) props.onSecondPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.buttonContainer, props.style]}
    >
      <Image source={iconSource} style={[styles.buttonImage, props.style]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
  },
  buttonImage: {
    width: 70,
    height: 70,
  },
});

export default SpecialButton;
