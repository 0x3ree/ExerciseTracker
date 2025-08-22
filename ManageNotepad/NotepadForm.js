import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import NoteInput from "./NoteInput";
function NotepadForm({ submitButtonLabel, onCancel, onSubmit }) {
  const [inputs, setInputs] = useState({
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curentInputs) => {
      return {
        ...curentInputs, // this will copy the current state of the inputs object
        [inputIdentifier]: { value: enteredValue, isValid: true }, // this targets a specific input dynamically
      };
    });
  }

  function submitHandler() {
    const noteData = {
      title: inputs.title.value,
      description: inputs.description.value,
    };
  }
  const titleIsValid = noteData.title.trim().length > 0;
  const descriptionIsValid = noteData.description.trim().length > 0;
  if (!titleIsValid || !descriptionIsValid) {
    setInputs((curentInputs) => {
      return {
        title: { value: curentInputs.title.value, isValid: titleIsValid },
        description: {
          value: curentInputs.description.value,
          isValid: descriptionIsValid,
        },
      };
    });
    //show feedback
    return;
  } // if any of the input values are invalid, we will not call the onSubmit function and just return

  onSubmit(noteData); // this will call the onSubmit function and pass the exerciseData object to it
}
const formIsInvalid = !inputs.title.isValid || !inputs.description.isValid;
return (
  <View style={styles.form}>
    <NoteInput
      label="TITLE"
      invalid={!inputs.title.isValid}
      textInputConfig={{
        onChangeText: inputChangeHandler.bind(this, "title"),
        value: inputs.title.value,
      }}
    />

    <NoteInput
      label="DESCRIPTION"
      textInputConfig={{
        multiline: true,
        autoCorrect: true,
        onChangeText: inputChangeHandler.bind(this, "description"),
        value: inputs.description.value,
      }}
    />
    {formIsInvalid && (
      <Text style={styles.errorText}>
        Invalid Input - Please Check Your Entered Data!
      </Text>
    )}

    <View style={styles.buttons}>
      <Button style={styles.button} mode="flat" onPress={onCancel}>
        Cancel
      </Button>
      <Button style={styles.button} onPress={submitHandler}>
        {submitButtonLabel}
      </Button>
    </View>
  </View>
);

export default NotepadForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 2,
    padding: 20,
  },

  buttons: {
    // marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.color.error500,
    margin: 8,
  },
});
