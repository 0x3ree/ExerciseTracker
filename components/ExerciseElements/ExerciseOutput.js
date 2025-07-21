import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import ExerciseList from "./ExerciseList";
import ExerciseSummary from "./ExerciseSummary";

// in here we get the expeses props(that should be displayd in a list and summarized) which is an array of objects,
// in here we are using a dummy data to test the component

function ExerciseOutput({ exercise, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (exercise.length > 0) {
    content = <ExerciseList exercise={exercise} />;
  }

  return (
    <View style={styles.container}>
      <ExerciseSummary />
      {content}
    </View>
  );
  // we used the view here to be able to edit/add styles/manipulate the final output of the component
}

export default ExerciseOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.color.primary0,
    flex: 1,
  },

  infoText: {
    color: GlobalStyles.color.primary1,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
