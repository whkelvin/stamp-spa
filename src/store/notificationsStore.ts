import { derived, readable, writable, type Writable } from "svelte/store";

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

const _notificationsStore = writable<Notification[]>([]);

export const notificationsStore = derived<
  Writable<Notification[]>,
  Notification[]
>(
  _notificationsStore,
  (_notificationsStore: Notification[]) => _notificationsStore
);

export function sendNotification(notification: Notification) {
  _notificationsStore.update((notifications: Notification[]) => {
    notifications = notifications.concat([notification]);
    if (notifications.length > 2) {
      notifications.shift();
    }
    return notifications;
  });
}
