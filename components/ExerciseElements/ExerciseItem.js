import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/Styles";

function ExerciseItem({ id, description, sets, reps }) {
  const navigation = useNavigation();
  function exercisePressHandler() {
    navigation.navigate("ManageExerciseScreen", {
      exerciseId: id,
    });
  }
  return (
    <Pressable
      onPress={exercisePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.exerciseItem}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.textBase}>{description}</Text>
        </View>
        <View style={styles.sandrContainer}>
          <Text style={styles.textBase}>{sets}</Text>
        </View>
        <View style={styles.sandrContainer}>
          <Text style={styles.textBase}>{reps}</Text>
        </View>
      </View>
    </Pressable>
  );
}
// for an upgrade we can turn the text here to text input so no need to edit it from another screen.
export default ExerciseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  textBase: {
    color: GlobalStyles.color.primary1,
    fontSize: 16,
    fontWeight: "bold",
  },
  exerciseItem: {
    marginBottom: 30,
    padding: 12,
    margin: 8,
    marginVertical: 8,
    backgroundColor: GlobalStyles.color.primary001,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    /* for IOS
      shadowColor: GlobalStyles.color.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:0.4
    */
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
  },

  sandrContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.color.primary0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 60,
    marginLeft: 10,
  },
});
