import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function ExerciseSummary() {
  return (
    <View style={styles.container}>
      <View style={styles.containerText3}>
        <Text style={styles.textBase}>Exercise</Text>
      </View>

      <View style={styles.containerText1}>
        <Text style={styles.textBase}>sets</Text>
      </View>
      <View style={styles.containerText2}>
        <Text style={styles.textBase}>reps</Text>
      </View>
    </View>
  );
}

export default ExerciseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: GlobalStyles.color.primary100,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  containerText1: {
    paddingLeft: 120,
  },

  containerText2: {
    paddingHorizontal: 30,
  },

  containerText3: {
    paddingLeft: 30,
  },
  textBase: {
    fontSize: 15,
    fontWeight: "bold",
    color: GlobalStyles.color.primary1,
  },
});
