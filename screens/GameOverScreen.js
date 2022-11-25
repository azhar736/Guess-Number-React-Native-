import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/Color";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summeryText}>
        Your phone needed
        <Text style={styles.highlight}> {roundNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceHeight < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
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
    fontWeight: "bold",
  },
  highlight: {
    color: Colors.primary500,
  },
});
