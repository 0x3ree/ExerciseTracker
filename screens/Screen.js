import React, { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Dummy data for exercises per day
const EXERCISES = {
  Monday: ["Push Ups", "Squats"],
  Tuesday: ["Pull Ups", "Lunges"],
  Wednesday: ["Plank", "Burpees"],
  Thursday: ["Sit Ups", "Jumping Jacks"],
  Friday: ["Mountain Climbers", "Crunches"],
  Saturday: ["Rest"],
  Sunday: ["Yoga"],
};

function MainScreen() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <View style={styles.container}>
      {/* Days of the week */}
      <View style={styles.daysContainer}>
        {DAYS.map((day) => (
          <Pressable
            key={day}
            style={[
              styles.dayButton,
              selectedDay === day && styles.selectedDayButton,
            ]}
            onPress={() => setSelectedDay(day)}
          >
            <Text style={styles.dayText}>{day}</Text>
          </Pressable>
        ))}
      </View>

      {/* Exercises for selected day */}
      {selectedDay && (
        <View style={styles.exercisesContainer}>
          <Text style={styles.exercisesTitle}>
            Exercises for {selectedDay}:
          </Text>
          <FlatList
            data={EXERCISES[selectedDay]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Text style={styles.exerciseItem}>{item}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  daysContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 16 },
  dayButton: {
    padding: 10,
    margin: 4,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  selectedDayButton: {
    backgroundColor: "#007bff",
  },
  dayText: { color: "#333" },
  exercisesContainer: { marginTop: 16 },
  exercisesTitle: { fontWeight: "bold", marginBottom: 8 },
  exerciseItem: { padding: 6, fontSize: 16 },
});

export default MainScreen;
