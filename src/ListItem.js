import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const ListItem = ( props ) => {
  const [strikeState, setStrikeState] = useState(false)


  return (
    <TouchableOpacity
      onLongPress={props.onDelete.bind(this, props.id)}
      onPress={() => setStrikeState(!strikeState)}
    >
      <View style={styles.item}>
        <Text style={[
          strikeState ? styles.strikeItemText : styles.itemText
        ]}>
          <Text>{props.title}</Text>
        </Text>
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