import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SectionBar = (props) => {
  const { t } = useTranslation();

  const handleSectionChange = (section) => {
    props.setActiveSection(section);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSectionChange("active")}
      >
        <Text
          style={[
            styles.text,
            props.activeSection === "active" && styles.textChosen,
          ]}
        >
          {t("screens.list.section-bar.active")}
        </Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSectionChange("taken")}
      >
        <Text
          style={[
            styles.text,
            props.activeSection === "taken" && styles.textChosen,
          ]}
        >
          {t("screens.list.section-bar.chosen")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
  line: {
    width: 1,
    height: "100%",
    backgroundColor: "black",
  },
  text: {
    fontSize: 18,
  },
  textChosen: {
    fontWeight: "bold",
  },
});

export default SectionBar;
