<script lang="ts">
  import NavBar from "./ui/components/NavBar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import ComingSoonModal from "./ui/components/modals/ComingSoonModal.svelte";
  import Sidebar from "./ui/components/Sidebar.svelte";
  import LoginModal from "./ui/components/modals/LoginModal.svelte";
  import CreateYoutubePostModal from "./ui/components/modals/CreateYoutubePostModal.svelte";
  import { onMount } from "svelte";
  import { isTokenExpired } from "./data/services/JWTService";
  import { stampToken } from "./data/store/loginStore";
  import NotificationsWrapper from "./ui/components/notifications/NotificationsWrapper.svelte";
  import Notification from "./ui/components/notifications/Notification.svelte";

  onMount(() => {
    const token = window.localStorage.getItem("stampToken");
    if (token != undefined && token != "") {
      if (isTokenExpired(token) == false) {
        stampToken.update(() => token);
      }
    }
  });
</script>

<main class="w-full">
  <NotificationsWrapper />
  <Sidebar>
    <NavBar />
    <Router {routes} />
  </Sidebar>

  <ComingSoonModal />
  <LoginModal />
  <CreateYoutubePostModal />
</main>
