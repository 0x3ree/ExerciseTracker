import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExerciseScreen from "./screens/ManageExerciseScreen";
import DaysScreen from "./screens/DaysScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import IconButton from "./components/UI/IconButton";
import ExercisesContextProvider from "./store/exercises-context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="black" />
      <ExercisesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#fff" },
              headerTintColor: "#000",
              contentStyle: { backgroundColor: "#000" },
            }}
          >
            <Stack.Screen name="Category" component={DaysScreen} />
            <Stack.Screen
              name="ExerciseScreen"
              component={ExerciseScreen}
              options={({ navigation }) => ({
                headerRight: ({ tintcolor }) => (
                  <IconButton
                    icon="add"
                    color={tintcolor}
                    size={24}
                    onPress={() => {
                      navigation.navigate("ManageExerciseScreen");
                    }}
                  />
                ),
              })}
            />

            <Stack.Screen
              name="ManageExerciseScreen"
              component={ManageExerciseScreen}
              //options={{ presentation: "modal" }}
              // the presentation option is used to show the screen as a modal which only works on iOS
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExercisesContextProvider>
    </>
  );
}
