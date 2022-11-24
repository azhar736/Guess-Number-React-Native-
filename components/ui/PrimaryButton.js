import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../utils/Color";
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      {/*We Can Apply Mubile STyling Object to Any View Component by passing 
         all the styling object as an array 
         to that component
         */}
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnercontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.75,
  },
});
