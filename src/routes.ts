import Home from "./ui/pages/Home.svelte";
import Theme from "./ui/pages/Theme.svelte";
import Demo from "./ui/pages/Demo.svelte";

export default {
  "/": Home,
  // The catch-all route must always be last
  "/theme": Theme,
  "/demo": Demo,
};
