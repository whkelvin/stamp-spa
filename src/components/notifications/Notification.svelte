<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import {
    NotificationType,
    type Notification,
  } from "../../store/notificationsStore";

  export let notification: Notification = {
    id: "",
    description: "default notification",
    type: NotificationType.info,
  };

  let visible = false;

  onMount(() => {
    visible = true;
    setTimeout(() => {
      visible = false;
    }, 2000);
  });

  function getClasses() {
    if (notification.type == NotificationType.info) {
      return "alert alert-info shadow-lg mb-2 mt-2";
    }
    if (notification.type == NotificationType.warning) {
      return "alert alert-warning shadow-lg mb-2 mt-2";
    }
    if (notification.type == NotificationType.error) {
      return "alert alert-error shadow-lg mb-2 mt-2";
    }
  }
</script>

{#if visible}
  {#if notification.type == NotificationType.info}
    <div
      class="alert alert-info shadow-lg mb-2 mt-2"
      in:fly={{ y: -100, duration: 500 }}
      out:fly={{ y: -100, duration: 500 }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-current flex-shrink-0 w-6 h-6"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>{notification.description}</span>
      </div>
    </div>
  {/if}

  {#if notification.type == NotificationType.warning}
    <div
      class="alert alert-warning shadow-lg mb-2 mt-2"
      in:fly={{ y: -100, duration: 500 }}
      out:fly={{ y: -100, duration: 500 }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 flex-shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          /></svg
        >
        <span>{notification.description}</span>
      </div>
    </div>
  {/if}

  {#if notification.type == NotificationType.error}
    <div
      class="alert alert-error shadow-lg mb-2 mt-2"
      in:fly={{ y: -100, duration: 500 }}
      out:fly={{ y: -100, duration: 500 }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 flex-shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{notification.description}</span>
      </div>
    </div>
  {/if}
{/if}
