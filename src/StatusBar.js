import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Settings from "./Settings";


const StatusBar = () => {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalOpen = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Image 
          source={require('./../assets/icons8-basket-100.png')}
          style={styles.image}
        />
        <Text style={styles.title}>{t("screens.list.title")}</Text>
      </View>
      <TouchableOpacity onPress={onModalOpen}>
        <Image 
          source={require('./../assets/icons8-setting-100.png')}
          style={[styles.image, styles.imageSetting]}
        />
      </TouchableOpacity>

      <Settings isVisible={isModalVisible} onClose={onModalClose}/>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomColor: '#D2E0FB'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageSetting: {
    alignSelf: 'flex-end',
  },
});

export default StatusBar;