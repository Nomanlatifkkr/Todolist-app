import React, { useState, useEffect, useContext } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const EditTaskModal = ({ visible, onClose, task, onSave }) => {
  const { theme } = useContext(ThemeContext);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (task) {
      setTaskText(task.text);
    }
  }, [task]); // Update taskText when task changes

  const handleSave = () => {
    if (taskText.trim()) {
      onSave(task.id, taskText.trim());
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
          <Text style={[styles.title, { color: theme.text }]}>Edit Task</Text>
          <TextInput
            style={[styles.input, { color: theme.text, borderColor: theme.primary }]}
            value={taskText}
            onChangeText={setTaskText}
            placeholder="Update your task"
            placeholderTextColor={theme.text}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#e74c3c" }]} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default EditTaskModal;
