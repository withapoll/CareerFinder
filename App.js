import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "./tabs/HomeScreen";
import FavoriteJobs from "./tabs/FavoriteJobs";
import PrepareResume from "./tabs/work advices/PrepareResume";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  const navigation = useNavigation();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="PrepareResume"
        component={PrepareResume}
        options={{
          title: "Prepare Resume",
          headerShown: true,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 10, fontWeight: "bold" }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#333333",
          tabBarInactiveTintColor: "#DADADA",
          tabBarLabel: () => null,
          tabBarStyle: {
            backgroundColor: "#fff",
            width: "100%",
            alignSelf: "center",
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            headerShown: false,
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Search
              </Text>
            ),
            headerLeft: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Icon
                  name="location-outline"
                  color="#B8BFFF"
                  size={30}
                  onPress={() => console.log("Add")}
                />
                <TouchableOpacity onPress={() => console.log("City selection")}>
                  <Text style={{ color: "black", marginLeft: 5, fontSize: 14 }}>
                    Moscow
                  </Text>
                </TouchableOpacity>
              </View>
            ),
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoriteJobs}
          options={{
            headerShown: false,
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Favorites
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
