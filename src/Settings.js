import React from "react";
import { useTranslation } from "react-i18next";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Settings = ({ isVisible, onClose }) => {
  const { t, i18n } = useTranslation();

  return (
    <Modal visible={isVisible} animationType="slide">
      <View>
        <Text style={styles.titleText}>{t("screens.settings.title")}</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>
            {t("screens.settings.language-section")}
          </Text>

          <TouchableOpacity onPress={() => i18n.changeLanguage("en")}>
            <Image
              source={require("./../assets/icons8-great-britain-48.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => i18n.changeLanguage("pl")}>
            <Image source={require("./../assets/icons8-poland-48.png")} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.titleText}>{t("screens.settings.exit")}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Settings;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionContainer: {},
  sectionText: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    padding: 20,
  },
});
