import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function FavoriteJobs() {
  return (
    <View style={styles.FavoriteJobsList}>
      <TouchableOpacity style={styles.JobContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>Job 1</Text>
            <Text>Company 1</Text>
          </View>
          <Icon name="heart" size={25} color="red" />
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={styles.SalaryLabel}>
            <Text>Salary</Text>
          </View>
          <View style={styles.ExpirienceLabel}>
            <Text>Yeas of Experience</Text>
          </View>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  FavoriteJobsList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  JobContainer: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    width: 330,
    height: 100,
  },
  SalaryLabel: {
    marginTop: 10,
    backgroundColor: "#B8BFFF",
    padding: 5,
    borderRadius: 7,
  },
  ExpirienceLabel: {
    marginTop: 10,
    backgroundColor: "#7EFE9A",
    padding: 5,
    borderRadius: 7,
  },
});
