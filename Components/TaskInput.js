import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

const TaskInput = ({ onAddTask }) => {
  const { theme } = useContext(ThemeContext);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText);  // Ensure this function is passed from App.js
      setTaskText("");       // Clear input after adding task
    }
  };

  return (
    <View style={[styles.inputContainer, { backgroundColor: theme.inputBg }]}>
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Add a new task..."
        placeholderTextColor={theme.placeholder}
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
        <Ionicons name="add-circle" size={32} color={theme.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  addButton: {
    marginLeft: 10,
  },
});

export default TaskInput;
