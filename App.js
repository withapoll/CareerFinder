import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./tabs/HomeScreen";
import FavoriteJobs from "./tabs/FavoriteJobs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Text style={{ textAlign: "center" }}>Search</Text>
            ),
            headerLeft: () => (
              <Text style={{ textAlign: "center" }}>Moscow</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteJobs}
          options={{
            headerTitle: () => (
              <Text style={{ textAlign: "center" }}>Favorite Jobs</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
