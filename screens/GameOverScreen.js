import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/Color";
import Title from "../components/ui/Title";
const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summeryText}>
        Your phone needed <Text style={styles.highlight}>X</Text>rounds to guess
        the number<Text style={styles.highlight}>Y</Text>.
      </Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontSize: 18,
  },
  highlight: {
    color: Colors.primary500,
  },
});
