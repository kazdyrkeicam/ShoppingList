import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const ShoppingList = ( props ) => {

  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});


export default ShoppingList;