import { useState, useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import ExerciseForm from "../ManageExercise/ExerciseForm";
import { ExercisesContext } from "../store/exercises-context";
import { GlobalStyles } from "../constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { storeExercise, updateExercise, deleteExercise } from "../store/http";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
function ManageExerciseScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const { dayId } = route.params || {};
  const editedExerciseId = route.params?.exerciseId;
  const exerciseCtx = useContext(ExercisesContext);
  const isEditing = !!editedExerciseId;

  const selectedExercise = exerciseCtx.exercise.find(
    (exercise) => exercise.id === editedExerciseId
  );

  //**we can update the options of a screen from inside that screen, with the help of the navigation
  //  prop(provided it is a registered screen) with the navigation.setOptions({}) and it is adviced to use this inside of
  //  a useLayoutEffect as to aviod lagging when used alone or with useEffect
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Exercise" : "Add Exercise",
    });
  }, [navigation, isEditing]);

  async function deleteExerciseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExercise(editedExerciseId);
      exerciseCtx.deleteExercise(editedExerciseId);
      navigation.goBack();
    } catch (error) {
      setError("Could not delete exercise - Please try again!");
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(exerciseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        const updatedData = { ...exerciseData, dayId: selectedExercise.dayId };
        exerciseCtx.updateExercise(editedExerciseId, updatedData);
        await updateExercise(editedExerciseId, updatedData);
      } else {
        const id = await storeExercise({ ...exerciseData, dayId });
        exerciseCtx.addExercise({ ...exerciseData, id: id, dayId });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save data - please try again!");
      setIsSubmitting(false);
    }
  }
  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }
  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExerciseForm
        submitButtonLabel={isEditing ? "update" : "add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExercise}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <Ionicons
            name="trash"
            color={GlobalStyles.color.error500}
            size={36}
            onPress={deleteExerciseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExerciseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.color.primary0,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
