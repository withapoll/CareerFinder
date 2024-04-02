import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function JobPage({ route }) {
  const navigation = useNavigation();
  const navigationGoBack = () => {
    navigation.goBack();
  };
  const {
    logo,
    jobTitle,
    companyName,
    jobDescription,
    jobRequirements,
    jobLocation,
  } = route.params;
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigationGoBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Job Details</Text>
        <TouchableOpacity>
          <Icon name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <Image source={logo} style={{}} />
      <Text>{jobTitle}</Text>
      <Text>{companyName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
