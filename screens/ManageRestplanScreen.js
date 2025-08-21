import NotepadForm from "../ManageNotepad/NotepadForm";

function ManageRestplanScreen({ navigation, route }) {
  const { restId } = route.params || {};
  const editedExerciseId = route.params?.exerciseId;
  return <NotepadForm />;
}

export default ManageRestplanScreen;
