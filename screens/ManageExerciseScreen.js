import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import ExerciseForm from "../ManageExercise/ExerciseForm";
import { ExercisesContext } from "../store/exercises-context";
import { GlobalStyles } from "../constants/Styles";
import { Ionicons } from "@expo/vector-icons";

function ManageExerciseScreen({ route, navigation }) {
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

  function deleteExerciseHandler() {
    exerciseCtx.deleteExercise(editedExerciseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(exerciseData) {
    if (isEditing) {
      exerciseCtx.updateExercise(editedExerciseId, exerciseData);
    } else {
      exerciseCtx.addExercise({ ...exerciseData, id: id });
    }
    navigation.goBack();
  }

  return (
    <View>
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
    backgroundColor: GlobalStyles.color.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
