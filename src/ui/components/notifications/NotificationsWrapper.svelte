<script lang="ts">
  import Notification from "./Notification.svelte";
  import { notificationsStore } from "../../services/notificationService";
</script>

<div
  class="bg-transparent fixed block top-2 left-8 right-8 md:left-16 md:right-16"
  style="z-index: 999;"
>
  {#each [...$notificationsStore].reverse() as noti (noti.id)}
    <Notification notification={noti} />
  {/each}
</div>
