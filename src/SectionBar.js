import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const SectionBar = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Aktywne</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button}>
        <Text>Wybrane</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 35,
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
  }
});


export default SectionBar;