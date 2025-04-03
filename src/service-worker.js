// src/service-worker.js
import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("fetch", (event) => {
  // Custom fetch behavior can be added here
});
