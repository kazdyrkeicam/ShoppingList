import { StatusBar } from "react-native";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Main from "./src/Main";
import "./localization/i18n";

export default function App() {
  return <Main style={styles.mainApp} />;
}

const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
  },
});
