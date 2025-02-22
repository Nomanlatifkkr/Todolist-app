import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const Footer = ({ tasks }) => {
  const { theme } = useContext(ThemeContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <View style={[styles.footer, { backgroundColor: theme.primary }]}>
      <Text style={[styles.text, { color: theme.text }]}>
        Total Tasks: {totalTasks}
      </Text>
      <Text style={[styles.text, { color: theme.text }]}>
        Completed: {completedTasks}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth: 1,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Footer;
