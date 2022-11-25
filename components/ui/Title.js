import { StyleSheet, Text } from "react-native";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 12,
    width: 300,
    maxWidth: "80%",
    marginBottom: 24,
  },
});
