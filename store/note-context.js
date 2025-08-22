import { createContext, useReducer } from "react";
//import { DUMMY_EXERCISES } from "../data/dummy-data";

export const NoteContext = createContext({
  note: [],
  addNote: ({ title, description }) => {}, // in here we are using the object destructuring to get the values from the object
  // this is used to add a new exercise
  setNote: (note) => {}, // this is used to set the exercises array, we are not using it in this app but we can use it to set the exercises array from the firebase database
  deleteNote: ({ id }) => {}, // in here we expect the id of the exercise. this is used to delete an exercise
  updateNote: (id, { title, description }) => {}, // in here we expect the id of the exercise and the new values of the exercise. this is used to update an expense
});

// this is the reducer function that will be used to update the exercises array
// this function will take the current state and the action and will return the new state
function noteReducer(state, action) {
  // the action.type is a property of the action object that specifies the type of operation to perform. it's used to determine which case in the switch statement should be executed, in here the action object has two parts,
  // the type(a string that identifies the action to be performed(e.g 'ADD')) and the payload(additional data required to perform the action (e.g expense details or ID))
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updateableNoteIndex = state.findIndex(
        (note) => note.id === action.payload.id
      ); // this will find the index of the exercise that we want to update. there by getting the index instead of the item itself to again update everything immutably thereafter.

      const updateableNote = state[updateableNoteIndex]; // this will get the exercise that we want to update
      const updatedItem = { ...updateableNote, ...action.payload.data }; // this will create a new exercise object with the updated values, we are using the spread operator to copy the current exercise and then we are using the spread operator again to copy and merge the new values from the action.payload.data object which overrides the old state
      const updatedNote = [...state]; // this will create a new array with the updated exercise
      updatedNote[updateableNoteIndex] = updatedItem; // this will update the exercise in the exercise array
      return updatedNote; // this will return the new exercise array with the updated exercise
    case "DELETE":
      // this will delete an expense from the exercise array
      return state.filter((note) => note.id !== action.payload); // this will filter the exercise array and return a new array without the exercise that we want to delete, in here we are using the filter method to create a new array that contains all the exercises except the one with the id that we want to delete
    // the action.payload is the id of the exercise that we want to delete,
    default:
      return state;
  }
}

// this handles the context logic of the context and will be used to provide the context to the app
function NoteContextProvider({ children }) {
  const [noteState, dispatch] = useReducer(noteReducer, []); // this will create the exercise array and the dispatch function that will be used to update the exercise array

  // this will be used to add a new exercise to the exercise array, this function will take the exerciseData object and will dispatch the action to add the new expense to the exercise array
  // the Action is the value passed to the dispatch function, it is an object that contains the type of action to be performed and the payload (the data needed to perform the action)
  function addNote(noteData) {
    //const newExercise = { ...exerciseData, id: Math.random().toString() }; // this will create a new exercise object with the new exercise data and a random id, we are using the spread operator to copy the exerciseData object and then we are adding the id property to it
    dispatch({ type: "ADD", payload: noteData }); // this will add a new exercise to the exercise array and the name(type,payload) is upto you
  }
  function setNote(note) {
    dispatch({ type: "SET", payload: note }); // this will set the exercise array to only store the iputed data on firebase database and use the inputed data to update the exercise array with the added exercise so as to save it from having to fetch it again from the firebase database and reload when we already have the data in the context
  }
  function deleteNote(id) {
    dispatch({ type: "DELETE", payload: id }); // this will delete an exercise from the exercise array
  }
  function updateNote(id, noteData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: noteData } }); // this will update an exercise in the exercise array
  }

  const value = {
    note: noteState,
    setNote: setNote,
    addNote: addNote,
    deleteNote: deleteNote,
    updateNote: updateNote,
  };
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
export default NoteContextProvider;
