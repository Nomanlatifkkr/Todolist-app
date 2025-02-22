import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = "tasks_data";

// Save tasks to AsyncStorage
export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASKS_KEY, jsonValue);
  } catch (error) {
    console.error("Error saving tasks:", error);
  }
};

// Load tasks from AsyncStorage
export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASKS_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }
};

// Clear all tasks (optional)
export const clearTasks = async () => {
  try {
    await AsyncStorage.removeItem(TASKS_KEY);
  } catch (error) {
    console.error("Error clearing tasks:", error);
  }
};
