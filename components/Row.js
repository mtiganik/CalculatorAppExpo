import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
});

export default Row;

