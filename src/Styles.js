import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputTextItem: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    paddingLeft: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },

  searchItem: {
    flex: 1,
    backgroundColor: "red",
  },
  suggestionList: {
    flex: 2,
    backgroundColor: "green",
  },

  addItemContainer: {
    position: "relative",
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default styles;
