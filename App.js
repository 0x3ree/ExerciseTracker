import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExerciseScreen from "./screens/ManageExerciseScreen";
import DaysScreen from "./screens/DaysScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
//import ExerciseProvider from "./store/exercise-context";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#fff" },
          }}
        >
          <Stack.Screen name="Category" component={DaysScreen} />
          <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />

          <Stack.Screen
            name="ManageScreen"
            component={ManageExerciseScreen}
            //options={{ presentation: "modal" }}
            // the presentation option is used to show the screen as a modal which only works on iOS
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
