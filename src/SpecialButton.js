import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text } from "react-native";


const SpecialButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image 
        source={require('./../assets/icons8-plus-100.png')}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  buttonContainer: {
    // backgroundColor: '#DCFFB7',
    // paddingVertical: 5,
    // paddingHorizontal: 5,
    borderRadius: 10,
  },
  buttonImage: {
    width: 70,
    height: 70,
  },
});



export default SpecialButton;