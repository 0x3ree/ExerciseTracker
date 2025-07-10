import { StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "../constant/Style";

function Input({ label, style, invalid, textInputConfig }) {
  let inputStyles = [styles.input]; // this will create an array with the styles for the input field
  //check what a refrecence value is
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline); // this will add the styles for the multiline input field to the inputStyles array
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput); // this will add the styles for the invalid input field to the inputStyles array
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

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.color.primary200,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.color.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.color.primary700,
  },
  // for the next we want to make the input field a little bit bigger
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top", // this will make the text start from the top of the input field
  },
  invalidLabel: {
    color: GlobalStyles.color.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.color.error50,
  },
});
