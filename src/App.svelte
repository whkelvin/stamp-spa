<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import ComingSoonModal from "./components/ComingSoonModal.svelte";
</script>

<main class="w-full">
  <NavBar />
  <Router {routes} />
  <ComingSoonModal />
</main>
