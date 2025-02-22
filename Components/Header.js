import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { lightTheme, darkTheme } from "../theme";
import { ThemeContext } from "../context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <Text style={[styles.title, { color: theme.text }]}>To-Do List</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Ionicons
          name={theme === lightTheme ? "moon" : "sunny"}
          size={24}
          color={theme.text}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Header;
