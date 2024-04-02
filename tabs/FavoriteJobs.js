import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import companyLogo from "../assets/company-logo.png";
import companyLogo2 from "../assets/company-logo-2.png";
import companyLogo3 from "../assets/company-logo-3.png";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function FavoriteJobs() {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const toggleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked);
  };

  const jobs = [
    {
      logo: companyLogo,
      title: "Android Developer Pay App",
      companyName: "Yandex",
      salary: "3500$",
      experience: "2 Years of Experience",
      timePosted: "5 Days ago",
    },
    {
      logo: companyLogo2,
      title: "Android Developer Kotlin",
      companyName: "red_mad_robot",
      salary: "2390$",
      experience: "1 Year of Experience",
      timePosted: "7 Days ago",
    },
    {
      logo: companyLogo3,
      title: "Middle Android Developer",
      companyName: "Avito",
      salary: "2740$",
      experience: "1 Year of Experience",
      timePosted: "12 Days ago",
    },
  ];

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
          {jobs.map((job, index) => (
            <TouchableOpacity
              key={index}
              style={styles.JobContainer}
              onPress={() => {
                navigation.navigate("JobPage", {
                  jobTitle: job.title,
                  companyName: job.companyName,
                });
              }}
            >
              <View style={styles.CardHeader}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Image source={job.logo} style={styles.logo} />
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {job.title}
                      </Text>
                      <Text style={{ fontSize: 14 }}>{job.companyName}</Text>
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
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <View style={styles.SalaryLabel}>
                    <Text style={{ color: "#fff" }}>{job.salary}</Text>
                  </View>
                  <View style={styles.ExpirienceLabel}>
                    <Text style={{ color: "#fff" }}>{job.experience}</Text>
                  </View>
                </View>
                <View style={styles.TimePosted}>
                  <Text style={{ color: "gray" }}>{job.timePosted}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  logo: {
    width: 40,
    height: 40,
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
