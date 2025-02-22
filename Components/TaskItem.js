import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";

const TaskItem = ({ task, onDeleteTask, onToggleComplete, onEdit }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.taskContainer, { backgroundColor: theme.background }]}>
      {/* Toggle Task Completion */}
      <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
        <Ionicons
          name={task.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={task.completed ? theme.primary : theme.text}
        />
      </TouchableOpacity>

      {/* Task Text */}
      <Text
        style={[
          styles.taskText,
          {
            color: theme.text,
            textDecorationLine: task.completed ? "line-through" : "none",
          },
        ]}
      >
        {task.text}
      </Text>

      {/* Edit Task */}
      <TouchableOpacity onPress={() => onEdit(task)}>
        <Ionicons name="create-outline" size={24} color={theme.primary} />
      </TouchableOpacity>

      {/* Delete Task */}
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Ionicons name="trash" size={24} color={theme.secondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default TaskItem;
