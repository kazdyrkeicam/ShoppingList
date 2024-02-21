import React, { useState } from "react";
import { TextInput, View, StyleSheet, FlatList, Text } from "react-native";
import SpecialButton from "./SpecialButton";
import { TouchableOpacity, ScrollView } from "react-native-web";
import SearchItem from "./SearchItem";
import styles from "./Styles";



const categories = [
  { id: '1', name: 'Fruits' },
  { id: '2', name: 'Meat' },
  { id: '3', name: 'Bakery' },
];

const products = [
  { id: '1', name: 'Apple', category_id: '1' },
  { id: '2', name: 'Banana', category_id: '1' },
  { id: '3', name: 'Kiwi', category_id: '1' },
  { id: '4', name: 'Fish', category_id: '2' },
  { id: '5', name: 'Beef', category_id: '2' },
  { id: '6', name: 'Pork', category_id: '2' },
  { id: '7', name: 'Bread', category_id: '3' },
];

const validateItemName = name => {
  if (name.length === 0) return false;
  return products.some(item => item.name.toLowerCase() === name.toLowerCase());
}




export default function AddItem( props ) {
  const [itemName, setItemName] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const itemAddHandler = () => {
    if (!validateItemName(itemName)) return;

    props.onAddItem(itemName);
    setItemName("");

    setShowSuggestions(false);
  };

  const handleInputChange = (text) => {
    setItemName(text);

    const filteredItems = products.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredProducts(filteredItems);
    setShowSuggestions(true);
  };

  const handleSuggestionPress = product => {
    setItemName(product);
    setShowSuggestions(false);
  }


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for items..."
        value={itemName}
        onChangeText={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(true)}
        style={styles.inputTextItem}
      />
      {showSuggestions && (
        <FlatList
          data={filteredProducts}
          renderItem={itemData => (
            <SearchItem 
              title={itemData.item.name}
              onPress={handleSuggestionPress}
            /> 
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <SpecialButton onPress={itemAddHandler}/>
    </View>
  );
}