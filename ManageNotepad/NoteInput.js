import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Styles";

function NoteInput({ label, style, invalid, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.noteInput);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default NoteInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.color.primary1,
  },
  input: {
    marginVertical: 15,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: GlobalStyles.color.primary100,
    borderBottomWidth: 2,
    backgroundColor: GlobalStyles.color.primary100,
    borderRadius: 8,
  },
  noteInput: {
    textAlignVertical: "top",
    width: "100%",
    height: 500,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.color.primary100,
    borderRadius: 8,
    overflow: "hidden",
  },
  invalidLabel: {
    color: GlobalStyles.color.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.color.error50,
  },
});
