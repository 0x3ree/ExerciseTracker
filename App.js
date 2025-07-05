import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen name="MainScreen" component={MainScreen} />

            <Stack.Screen
              name="ManageScreen"
              component={ManageExercise}
              //options={{ presentation: "modal" }}
              // the presentation option is used to show the screen as a modal which only works on iOS
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
