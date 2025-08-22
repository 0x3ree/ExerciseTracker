import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/Styles";
import NoteList from "./NoteList";

// in here we get the note props(that should be displayd in a list and summarized) which is an array of objects,
// in here we are using a dummy data to test the component

function NoteOutput({ note, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (note.length > 0) {
    content = <NoteList note={note} />;
  }

  return <View style={styles.container}>{content}</View>;
  // we used the view here to be able to edit/add styles/manipulate the final output of the component
}

export default NoteOutput;

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
