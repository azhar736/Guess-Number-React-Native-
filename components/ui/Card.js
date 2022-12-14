import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../utils/Color";
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
export default Card;
const deviceWidth = Dimensions.get("window");
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 24,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.secondry500,
    //Shadow On Android Devices
    elevation: 8,
    //Shadow On iOS Devices
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
