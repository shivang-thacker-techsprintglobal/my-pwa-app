/* eslint-disable no-restricted-globals */

// Import Workbox for caching
import { precacheAndRoute } from "workbox-precaching";

// Precache files generated during the build
precacheAndRoute(self.__WB_MANIFEST);

// Custom fetch event (optional)
self.addEventListener("fetch", (event) => {
  // You can add custom caching logic here
  console.log("Fetching:", event.request.url);
});
