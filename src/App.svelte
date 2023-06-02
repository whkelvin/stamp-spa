<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import ComingSoonModal from "./components/modals/ComingSoonModal.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import LoginModal from "./components/modals/LoginModal.svelte";
  import CreateYoutubePostModal from "./components/modals/CreateYoutubePostModal.svelte";
  import { onMount } from "svelte";
  import { isTokenExpired } from "./services/JWTService";
  import { stampToken } from "./store/loginStore";
  import NotificationsWrapper from "./components/notifications/NotificationsWrapper.svelte";
  import Notification from "./components/notifications/Notification.svelte";

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
