import { useContext } from "react";
import ExerciseOutput from "../components/ExerciseElements/ExerciseOutput";
import { ExercisesContext } from "../store/exercises-context";
import RestplanScreen from "./RestplanScreen";

function ExerciseScreen({ route }) {
  const { dayId } = route.params;
  const exerciseCtx = useContext(ExercisesContext);

  const isRestDay = dayId === "d7";

  if (isRestDay) {
    return <RestplanScreen />;
  }

  const dayExercise = exerciseCtx.exercise.filter((ex) => ex.dayId === dayId);

  return (
    <ExerciseOutput
      exercise={dayExercise}
      fallbackText={"No exercise added yet!"}
    />
  );
}

export default ExerciseScreen;
