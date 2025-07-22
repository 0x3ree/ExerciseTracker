import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/Styles";

function Input({ label, style, invalid, textInputConfig }) {
  let inputStyles = [styles.input];
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.color.primary1,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.color.primary001,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.color.primary1,
  },

  // for the next we want to make the input field a little bit bigger
  //inputMultiline: {
  //  minHeight: 100,
  //   textAlignVertical: "top", // this will make the text start from the top of the input field
  // },
  invalidLabel: {
    color: GlobalStyles.color.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.color.error50,
  },
});
