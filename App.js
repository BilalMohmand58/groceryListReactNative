import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalsInput from "./components/GoalsInput";
import GoalsItem from "./components/GoalsItem";

export default function App() {
  const [goals, setgoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    setgoals((currentGoals) => [
      ...currentGoals,
      { enteredGoal: enteredGoal, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setgoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button
          title="Make Grocery List"
          color="#5F8D4E"
          onPress={startAddGoalHandler}
        />
        <GoalsInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          endAddGoalHandler={endAddGoalHandler}
        />

        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={(goalsData) => {
              return (
                <GoalsItem
                  goalsData={goalsData.item.enteredGoal}
                  onDeleteItem={deleteGoalHandler}
                  id={goalsData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  goalContainer: {
    marginVertical: 30,
    flex: 5,
    flexDirection: "column",
  },
});
