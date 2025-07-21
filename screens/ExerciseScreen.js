import { useContext } from "react";
import ExerciseOutput from "../components/ExerciseElements/ExerciseOutput";
import { ExercisesContext } from "../store/exercises-context";

function ExerciseScreen({ route }) {
  const { dayId } = route.params;
  const exerciseCtx = useContext(ExercisesContext);

  const dayExercise = exerciseCtx.exercise.filter((ex) => ex.dayId === dayId);

  return (
    <ExerciseOutput
      exercise={dayExercise}
      fallbackText={"No exercise added yet!"}
    />
  );
}

export default ExerciseScreen;
