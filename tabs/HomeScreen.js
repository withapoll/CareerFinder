import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInput = (text) => {
    setSearchQuery(text);
  };

  const renderQuickActionButton = (title, emoji, color) => (
    <TouchableOpacity
      style={[styles.quickActionButton, { backgroundColor: color }]}
    >
      <View style={styles.emojiContainer}>
        <Text style={styles.emojiText}>{emoji}</Text>
      </View>
      <Text style={styles.quickActionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearchInput}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.quickActionsContainer}
          contentContainerStyle={{
            justifyContent: "space-between",
          }}
        >
          {renderQuickActionButton("Full Time", "👨🏻‍💻", "#FCD3BC")}
          {renderQuickActionButton("Part Time", "📍", "#FFEBB8")}
          {renderQuickActionButton("Internships", "🎯", "#FFF4B8")}
          {renderQuickActionButton("Temporary", "👻", "#B8FFCC")}
        </ScrollView>
        <View>
          <Text style={styles.TextContainer}>
            Let's find your perfect job 👆🏻
          </Text>
        </View>
        <View style={styles.WorkAdvices}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PrepareResume")}
          >
            <View style={styles.AdviceBox}>
              <View style={styles.textContainer}>
                <Text>How to prepare your resume 🤔</Text>
              </View>
              <Image
                style={styles.Image}
                source={require("../assets/work-illustration.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.AdviceBox}>Top 10 mistakes in resume 😱</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.AdviceBox}>Resume Boxes</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  searchContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    padding: 10,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 24,
    marginBottom: 24,
    width: "90%",
    width: 289,
    height: 36,
  },
  searchInput: {
    fontSize: 14,
  },
  quickActionsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 15,
  },
  quickActionButton: {
    backgroundColor: "#FCD3BC",
    padding: 10,
    borderRadius: 10,
    width: 86,
    height: 90,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  quickActionButtonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  emojiContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  emojiText: {
    fontSize: 15,
  },
  TextContainer: {
    marginLeft: 15,
    marginTop: 10,

    width: 192,
    fontSize: 20,
    fontWeight: "bold",
  },
  WorkAdvices: {
    marginTop: 24,
    alignItems: "center",
  },
  AdviceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    padding: 10,
    borderRadius: 15,
    width: 330,
    height: 163,
    marginBottom: 15,
  },

  textContainer: {
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },

  Image: {
    width: "72%",
    height: 160,
  },
});
