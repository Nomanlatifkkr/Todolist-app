import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ThemeProvider, { ThemeContext } from "./context/ThemeContext";
import { loadTasks, saveTasks } from "./Components/utils/AsyncStorageHelper";
import { scheduleTaskNotification, setupNotificationHandler } from "./Components/utils/NotificationService";
import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import TaskFilters from "./Components/TaskFilters"; // ✅ Import TaskFilters
import Footer from "./Components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { theme } = React.useContext(ThemeContext);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [refresh, setRefresh] = useState(false);

  // Load tasks from AsyncStorage when the app starts
  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await loadTasks();
      setTasks(savedTasks);
    };
    fetchTasks();
    setupNotificationHandler(); // Setup notification handler
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
  
    const newTask = { id: Date.now(), text: taskText, completed: false };
  
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setRefresh((prev) => !prev); // Force re-render
  
    scheduleTaskNotification(newTask, 600);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ✅ Apply Task Filters
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true; // Show all tasks
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      <TaskFilters selectedFilter={filter} onSelectFilter={setFilter} /> 
      <TaskInput onAddTask={addTask} />
      <TaskList 
  tasks={filteredTasks} 
  onDeleteTask={deleteTask} 
  onToggleComplete={toggleTaskCompletion} 
  onEditTask={(taskId, newText) => {
    setTasks((prevTasks) => 
      prevTasks.map((task) => 
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  }}
/>

      <Footer tasks={tasks} /> {/* ✅ Add Footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
