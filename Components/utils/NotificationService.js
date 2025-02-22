import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

// Request permission for notifications
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    return newStatus === "granted";
  }
  return true;
};

// Schedule a notification
export const scheduleTaskNotification = async (task, seconds = 60) => {
  const hasPermission = await requestNotificationPermission();
  if (!hasPermission) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Task Reminder 📝",
      body: `Don't forget: "${task.text}"`,
      sound: true,
    },
    trigger: { seconds },
  });
};

// Handle notification response (optional)
export const setupNotificationHandler = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
};

// Cancel all scheduled notifications (optional)
export const cancelAllNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
