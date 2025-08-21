import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import NoteInput from "./NoteInput";
function NotepadForm() {
  return (
    <View style={styles.form}>
      <NoteInput label="TITLE" />
      <NoteInput
        label="NOTE"
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button}>Cancel</Button>
        <Button style={styles.button}>Add</Button>
      </View>
    </View>
  );
}

export default NotepadForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 2,
    padding: 20,
  },

  buttons: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
