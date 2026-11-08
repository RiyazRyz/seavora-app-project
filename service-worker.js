
const CACHE_NAME = "ryzon-cache-v1";

const APP_FILES = [
  "./",
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

// INSTALL: Cache essential app files
self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Cache files individually so one missing file
      // does not prevent all other files from caching.
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

  // Do not intercept Firebase or external requests
  if (url.origin !== self.location.origin) return;

  // Do not cache browser extension or unsupported schemes
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);

        if (response && response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          }).catch(error => {
            console.warn("Cache update failed:", error);
          });
        }

        return response;

      } catch (error) {
        // Try exact cached request first
        const cached = await caches.match(request);

        if (cached) return cached;

        // Offline navigation fallback
        if (request.mode === "navigate") {
          const homePage = await caches.match("./home.html");

          if (homePage) return homePage;

          const loginPage = await caches.match("./otp.html");

          if (loginPage) return loginPage;
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
