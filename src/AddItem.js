import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import SpecialButton from "./SpecialButton";
import { useTranslation } from "react-i18next";
import SearchItem from "./SearchItem";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: "1", name: { en: "Fruits", pl: "Owoce" } },
  { id: "2", name: { en: "Meat", pl: "Mięso" } },
  { id: "3", name: { en: "Bakery", pl: "Pieczywo" } },
];

const products = [
  { id: "1", name: { en: "Apple", pl: "Jabłko" }, category_id: "1" },
  { id: "2", name: { en: "Banana", pl: "Banan" }, category_id: "1" },
  { id: "3", name: { en: "Kiwi", pl: "Kiwi" }, category_id: "1" },
  { id: "4", name: { en: "Fish", pl: "Ryba" }, category_id: "2" },
  { id: "5", name: { en: "Beef", pl: "Wołowina" }, category_id: "2" },
  { id: "6", name: { en: "Pork", pl: "Wieprzowina" }, category_id: "2" },
  { id: "7", name: { en: "Bread", pl: "Chleb" }, category_id: "3" },
];

export default function AddItem(props) {
  const { t } = useTranslation();

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [itemName, setItemName] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const TryFindValidateItem = (name) => {
    if (name.length === 0) return null;

    return (
      products.find(
        (item) => item.name[props.language].toLowerCase() === name.toLowerCase()
      ) || null
    );
  };

  const itemAddHandler = () => {
    let productFound = TryFindValidateItem(itemName);

    if (!productFound) return;

    props.onAddItem(productFound);
    setItemName("");

    setShowSuggestions(false);
  };

  const handleInputChange = (text) => {
    setItemName(text);

    const filteredItems = products.filter((item) =>
      item.name[props.language].toLowerCase().includes(text.toLowerCase())
    );

    setFilteredProducts(filteredItems);
    setShowSuggestions(true);
  };

  const handleSuggestionPress = (product) => {
    setItemName(product);
    setShowSuggestions(false);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => setIsAddModalVisible(true)}
        style={props.style[0]}
      >
        <Text style={props.style[1]}>+</Text>
      </TouchableOpacity>

      <Modal visible={isAddModalVisible} animationType="slide">
        <SafeAreaView style={styles.containerAddItems}>
          <View style={styles.searchItems}>
            <TextInput
              placeholder={t("screens.list.search-bar.place-holder")}
              value={itemName}
              onChangeText={handleInputChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(true)}
              style={styles.productInput}
            />
            <SpecialButton
              onPress={itemAddHandler}
              onSecondPress={() => setIsAddModalVisible(false)}
              source="Add"
              style={styles.addButton}
            />
          </View>

          {showSuggestions && (
            <FlatList
              data={filteredProducts}
              renderItem={(itemData) => (
                <SearchItem
                  title={itemData.item.name[props.language]}
                  onPress={handleSuggestionPress}
                  style={styles.suggestionItem}
                />
              )}
              keyExtractor={(item) => item.id}
              style={styles.suggestionList}
            />
          )}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerAddItems: {
    marginTop: 20,
    flexDirection: "column",
    flex: 1,
  },
  searchItems: {
    flexDirection: "row",
    alignContent: "flex-start",
    // backgroundColor: "red",
  },
  productInput: {
    flex: 2,
    padding: 12,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgray",
    // backgroundColor: "yellow",
  },
  addButton: {
    paddingHorizontal: 10,
    alignSelf: "flex-end",
  },
  suggestionList: {
    flex: 2,
    // backgroundColor: "green",
  },
  suggestionItem: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
    padding: 15,
    paddingHorizontal: 30,
  },
});
