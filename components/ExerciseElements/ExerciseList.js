import { FlatList } from "react-native";
import ExerciseItem from "./ExerciseItem";

// in here we can call this fucntion inline in the render prop but rather we call it outside for better readability

function renderExpenseItem(itemData) {
  return <ExerciseItem {...itemData.item} />;

  // in here we get the.item from flatlist which is an object labled as item(dummy expenses(now chnaged to expense)) by flatlist, that's how we are able to pull out the data from the object
}
function ExerciseList({ exercise }) {
  return (
    <FlatList
      data={exercise}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExerciseList;
