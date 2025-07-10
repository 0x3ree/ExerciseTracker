import { FlatList } from "react-native";
import Daystiles from "../components/Exercise/ExerciseDetails/Daystiles";
import { DAYS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
function DaysScreen() {
  const navigation = useNavigation();
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("ExerciseScreen", { dayId: itemData.item.id });
    }
    return (
      <Daystiles
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={DAYS}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default DaysScreen;
