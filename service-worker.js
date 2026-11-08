
const CACHE_NAME = "ryzon-cache-v2";

const APP_FILES = [
  "./",
  "./index.html",
  "./otp.html",
  "./home.html",
  "./profile.html",
  "./chat.html",
  "./notifications.html",
  "./explore.html",
  "./random-chat.html",
  "./settings.html",
  "./premium.html",
  "./ai-assistant.html",
  "./admin-dashboard.html",
  "./help.html",
  "./manifest.json"
];

// INSTALL: Cache the latest app files
self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await Promise.all(
        APP_FILES.map(async file => {
          try {
            await cache.add(file);
          } catch (error) {
            console.warn("Could not cache:", file, error);
          }
        })
      );

      await self.skipWaiting();
    })()
  );
});

// ACTIVATE: Remove old RYZON caches
self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(
            key =>
              key.startsWith("ryzon-cache-") &&
              key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

// FETCH: Network first, then cache
self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Do not intercept external requests such as Firebase
  if (url.origin !== self.location.origin) return;

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);

        if (response && response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }

        return response;

      } catch (error) {
        // First try the exact cached request
        const cached = await caches.match(request);

        if (cached) return cached;

        // Offline navigation fallback
        if (request.mode === "navigate") {
          const indexPage = await caches.match("./index.html");

          if (indexPage) return indexPage;

          const randomPage = await caches.match("./random-chat.html");

          if (randomPage) return randomPage;
        }

        return new Response(
          "You are offline. Please check your internet connection and try again.",
          {
            status: 503,
            statusText: "Service Unavailable",
            headers: {
              "Content-Type": "text/plain; charset=utf-8"
            }
          }
        );
      }
    })()
  );
});
