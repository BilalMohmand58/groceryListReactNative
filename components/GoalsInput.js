import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalsInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/grocery.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder=" Enter Item Here"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD ITEM" color="#5F8D4E" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="#F55050"
              onPress={props.endAddGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalsInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  textInput: {
    borderWidth: 1,
    color: "#000",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: "100%",
    height: "30%",
    margin: 20,
  },
});
