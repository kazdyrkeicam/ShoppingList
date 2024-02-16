import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const SectionBar = ({ setActiveSection }) => {

  const handleSectionChange = section => {
    setActiveSection(section);
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleSectionChange('active')}
      >
        
        <Text>Aktywne</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleSectionChange('taken')}
      >
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