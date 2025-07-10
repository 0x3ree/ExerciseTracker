/*
import { View, Text } from "react-native";

function ExerciseScreen({ route }) {
  const dayId = route.params.dayId;
  return (
    <View>
      <Text>Monday</Text>
    </View>
  );
}

export default ExerciseScreen;
*/

import { useState } from "react";
//import { View, Text, TextInput, Button, FlatList } from "react-native";
import ExerciseForm from "../ManageExercise/ExerciseForm";

function ExerciseScreen({ route }) {
  const { dayId, dayTitle } = route.params;
  // const dayId = route.params.dayId;
  const [exercise, setExercise] = useState("");
  const [exercises, setExercises] = useState([]);

  function addExercise() {
    if (exercise.trim()) {
      setExercises((prev) => [...prev, exercise]);
      setExercise("");
    }
  }

  return (
    <ExerciseForm />
    /*
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Exercises for {dayTitle}
      </Text>
      <TextInput
        placeholder="Add exercise"
        value={exercise}
        onChangeText={setExercise}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />
      <Button title="Add" onPress={addExercise} />
      <FlatList
        data={exercises}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => <Text style={{ padding: 8 }}>{item}</Text>}
      />
    </View>
    */
  );
}

export default ExerciseScreen;

/*
import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { ExerciseContext } from "../ExerciseContext";

function ExerciseScreen({ route }) {
  const { exercisesByDay, addExercise } = useContext(ExerciseContext);
  const dayId = route.params.dayId; // Fixed from dayIds
  const exercises = exercisesByDay[dayId] || [];

  // For display purposes, map dayId to day name (you could also pass title via navigation)
  const dayNames = {
    d1: "Monday",
    d2: "Tuesday",
    d3: "Wednesday",
    d4: "Thursday",
    d5: "Friday",
    d6: "Saturday",
    d7: "Sunday",
  };
  const dayName = dayNames[dayId] || "Unknown Day";

  const handleAddExercise = () => {
    // For now, add a dummy exercise; later, you can add a form
    addExercise(dayId, "New Exercise");
  };

  return (
    <View>
      <Text>Exercises for {dayName}</Text>
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <Text key={index}>{exercise}</Text>
        ))
      ) : (
        <Text>No exercises yet!</Text>
      )}
      <Button title="Add Exercise" onPress={handleAddExercise} />
    </View>
  );
}

export default ExerciseScreen;


*/
