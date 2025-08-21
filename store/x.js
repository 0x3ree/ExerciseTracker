import { createContext, useReducer } from "react";

export const NotesContext = createContext({
  notes: [],
  addNote: ({ title, content, date }) => {},
  setNotes: (notes) => {},
  deleteNote: ({ id }) => {},
  updateNote: (id, { title, content }) => {},
});

function notesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // A unique ID is a common requirement for notes
      const newId = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: newId }, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updateableNoteIndex = state.findIndex(
        (note) => note.id === action.payload.id
      );

      const updateableNote = state[updateableNoteIndex];
      const updatedItem = { ...updateableNote, ...action.payload.data };
      const updatedNotes = [...state];
      updatedNotes[updateableNoteIndex] = updatedItem;
      return updatedNotes;
    case "DELETE":
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
}

function NotesContextProvider({ children }) {
  const [notesState, dispatch] = useReducer(notesReducer, []);

  function addNote(noteData) {
    dispatch({ type: "ADD", payload: noteData });
  }

  function setNotes(notes) {
    dispatch({ type: "SET", payload: notes });
  }

  function deleteNote(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateNote(id, noteData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: noteData } });
  }

  const value = {
    notes: notesState,
    setNotes: setNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    updateNote: updateNote,
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
}

export default NotesContextProvider;
