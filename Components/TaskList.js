import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import TaskItem from "./TaskItem";
import EditTaskModal from "./EditTaskModal";

const TaskList = ({ tasks, onDeleteTask, onToggleComplete, onEditTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // ✅ Define handleEdit properly
  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  // ✅ Ensure onEditTask is called properly
  const handleSaveEdit = (taskId, newText) => {
    if (onEditTask) {
      onEditTask(taskId, newText);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks added yet!</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onDeleteTask={onDeleteTask}
              onToggleComplete={onToggleComplete}
              onEdit={() => handleEdit(item)} // ✅ Ensure handleEdit is used
            />
          )}
        />
      )}

      {/* Edit Task Modal */}
      <EditTaskModal
        visible={isModalVisible}
        task={selectedTask}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#888",
  },
});

export default TaskList;
