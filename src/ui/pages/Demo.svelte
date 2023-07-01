<script lang="ts">
  import {
    notificationsStore,
    NotificationType,
    type Notification,
    showNotification,
  } from "../services/notificationService";

  function addNotification() {
    const noti: Notification = {
      id: crypto.randomUUID(),
      description: "hello world",
      type: NotificationType.info,
    };
    showNotification(noti);
  }
  function addWarningNoti() {
    const noti: Notification = {
      id: crypto.randomUUID(),
      description: "hello world",
      type: NotificationType.warning,
    };
    showNotification(noti);
  }
  function addErrorNoti() {
    const noti: Notification = {
      id: crypto.randomUUID(),
      description: "hello world",
      type: NotificationType.error,
    };
    showNotification(noti);
  }
</script>

<div class="m-5">
  <h1 class="text-lg font-bold mb-2">Notification</h1>
  <button class="btn btn-primary" on:click={addNotification}>click me</button>
  <button class="btn btn-warning" on:click={addWarningNoti}>click me</button>
  <button class="btn btn-error" on:click={addErrorNoti}>click me</button>
</div>
