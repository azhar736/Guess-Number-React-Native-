import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/Color";
const StartGameScreen = ({ onPickNumber }) => {
  const [enterdNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (e) => {
    setEnteredNumber(e);
  };
  const resetInputHandler = (e) => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enterdNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      //Show Alert...
      Alert.alert(
        "Invalid number!",
        "Number has to be a valid number between 0 and 99",
        [{ text: "ok", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(choosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        {/*Text Input */}
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enterdNumber}
        />
        {/*Button */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
