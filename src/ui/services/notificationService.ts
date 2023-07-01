import { writable } from "svelte/store";

export enum NotificationType {
  info,
  warning,
  error,
}

export interface Notification {
  id: string;
  description: string;
  type: NotificationType;
}

export const notificationsStore = writable<Notification[]>([]);

export function showNotification(notification: Notification) {
  notificationsStore.update((notifications: Notification[]) => {
    notifications = notifications.concat([notification]);
    const MAX_NOTIFICATION_TO_SHOW = 2;
    if (notifications.length > MAX_NOTIFICATION_TO_SHOW) {
      notifications.shift();
    }
    return notifications;
  });
}
