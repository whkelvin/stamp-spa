import Home from "./pages/Home.svelte";
import Theme from "./pages/Theme.svelte";

export default {
  "/": Home,
  // The catch-all route must always be last
  "/theme": Theme,
};