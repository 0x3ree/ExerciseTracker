import { createContext, useState } from "react";

export const ExerciseContext = createContext();
function ExerciseProvider({ children }) {
  const [exercisesByDay, setExercisesByDay] = useState({
    d1: [], // Monday
    d2: [], // Tuesday
    d3: [],
    d4: [],
    d5: [],
    d6: [],
    d7: [], // Sunday
  });

  const addExercise = (dayId, exercise) => {
    setExercisesByDay((prev) => ({
      ...prev,
      [dayId]: [...prev[dayId], exercise],
    }));
  };

  return (
    <ExerciseContext.Provider value={{ exercisesByDay, addExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export default ExerciseProvider;
/*
import React, { createContext, useState } from "react";

export const ExerciseContext = createContext();

export function ExerciseProvider({ children }) {
  const [exercises, setExercises] = useState([]);

  const addExercise = (dayId, exercise) => {
    setExercises(prev => [...prev, { ...exercise, dayId, id: Date.now().toString() }]);
  };

  const editExercise = (exerciseId, updatedExercise) => {
    setExercises(prev => prev.map(ex => ex.id === exerciseId ? { ...ex, ...updatedExercise } : ex));
  };

  const deleteExercise = (exerciseId) => {
    setExercises(prev => prev.filter(ex => ex.id !== exerciseId));
  };

  return (
    <ExerciseContext.Provider value={{ exercises, addExercise, editExercise, deleteExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
*/
