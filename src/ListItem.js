import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import SpecialButton from './SpecialButton';



const ListItem = ( props ) => {
  return (
    <TouchableOpacity
      onLongPress={props.onPermDelete.bind(this, props.id)}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{props.title}</Text>
        <SpecialButton onPress={props.onPermDelete.bind(this, props.id)}/>
      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    borderTopWidth: 1,
    borderColor: '#D2E0FB',
    // margin: 5,
    padding: 15,
  },
  strikeItemText: {
    textDecorationLine: 'line-through',
  },
  itemText: {
    // textAlign: 'center'
    fontWeight: 'bold'
  },
});


export default ListItem;