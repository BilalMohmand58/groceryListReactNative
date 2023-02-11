import { Pressable, StyleSheet, Text } from "react-native";

function GoalsItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#5F8D4E" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <Text style={styles.goalItem}>{props.goalsData}</Text>
    </Pressable>
  );
}

export default GoalsItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5F8D4E",
    color: "white",
    borderRadius: 6,
  },
});
