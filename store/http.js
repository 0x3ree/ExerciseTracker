import axios from "axios";

const BACKEND_URL =
  "https://exercise-tracker-2f67d-default-rtdb.firebaseio.com/";

// post new exercise
export async function storeExercise(exerciseData) {
  const response = await axios.post(
    BACKEND_URL + "/exercise.json",
    exerciseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExercise() {
  const response = await axios.get(BACKEND_URL + "/exercise.json");
  const exercise = [];
  for (const key in response.data) {
    const exerciseObj = {
      id: key, // this is the unique id that firebase generates for each piece of data that we store in the database
      reps: response.data[key].reps, // this will access the reps property of the exercise object using the key
      sets: response.data[key].sets,
      description: response.data[key].description,
      dayId: response.data[key].dayId, // this will access the dayId property of  the exercise object using the key
    };
    exercise.push(exerciseObj); // this will push the exercise object into the exercise array
  }
  // axios gives us a data property in the response object which contains the data that we fetched from the database, so we can access the data using response.data
  return exercise; // this will return the exercise array which contains all the expenses that we fetched from the database
}

export function updateExercise(id, exerciseData) {
  return axios.put(BACKEND_URL + `/exercise/${id}.json`, exerciseData);
  // in here we are using the put method to update the exeercise data in the database, we are passing the id of the expense that we want to update and the new exercise data that we want to update it with
  // the id is used to target the specific exercise that we want to update, and the exerciseData is the new data that we want to update it with
  // this will update the expense data in the database
}
export function deleteExercise(id) {
  axios.delete(BACKEND_URL + `/exercise/${id}.json`);
  // in here we are using the delete method to delete the exercise data from the database, we are passing the id of the exercise that we want to delete which is also the same url we used to update the exercise data in the database
}
