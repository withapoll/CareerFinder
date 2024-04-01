import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function FavoriteJobs() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Favorites</Text>
          </View>
        </View>
        <View style={styles.FavoriteJobsList}>
          <TouchableOpacity style={styles.JobContainer}>
            <View style={styles.CardHeader}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Image
                    style={styles.Image}
                    source={require("../assets/company-logo.png")}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Android Developer Pay App
                    </Text>
                    <Text style={{ fontSize: 14 }}>Yandex</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toggleLike}>
                  <Icon
                    name={isLiked ? "heart" : "heart-outline"}
                    size={25}
                    color={isLiked ? "red" : "gray"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={styles.SalaryLabel}>
                  <Text style={{ color: "#fff" }}>3500$</Text>
                </View>
                <View style={styles.ExpirienceLabel}>
                  <Text style={{ color: "#fff" }}>2 Years of Experience</Text>
                </View>
              </View>
              <View style={styles.TimePosted}>
                <Text style={{ color: "gray" }}>5 Days ago</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.JobContainer}>
            <View style={styles.CardHeader}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Image
                    style={styles.Image}
                    source={require("../assets/company-logo-2.png")}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Android Developer Kotlin
                    </Text>
                    <Text style={{ fontSize: 14 }}>red_mad_robot</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toggleLike}>
                  <Icon
                    name={isLiked ? "heart" : "heart-outline"}
                    size={25}
                    color={isLiked ? "red" : "gray"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={styles.SalaryLabel}>
                  <Text style={{ color: "#fff" }}>2390$</Text>
                </View>
                <View style={styles.ExpirienceLabel}>
                  <Text style={{ color: "#fff" }}>1 Year of Experience</Text>
                </View>
              </View>
              <View style={styles.TimePosted}>
                <Text style={{ color: "gray" }}>7 Days ago</Text>
              </View>
            </View>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  FavoriteJobsList: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginTop: 48,
  },
  headerContainer: {
    height: "fit-content",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  JobContainer: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EAEAEA",
    width: "90%",
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
  TimePosted: {
    marginTop: 10,
    justifyContent: "center",
  },
  Image: {
    width: 40,
    height: 40,
  },
});
