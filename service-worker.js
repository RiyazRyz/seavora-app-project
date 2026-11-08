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

// Install: cache essential app files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(APP_FILES).catch(error => {
        console.warn("Some app files could not be cached:", error);
      });
    })
  );

  self.skipWaiting();
});

// Activate: remove old RYZON caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key.startsWith("ryzon-cache-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );

  self.clients.claim();
});

// Fetch: network first, then cached page
self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Do not cache Firebase or other external requests
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
        }

        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);

        if (cached) return cached;

        if (request.mode === "navigate") {
          const homePage = await caches.match("./home.html");
          if (homePage) return homePage;
        }

        return new Response(
          "You are offline. Please check your internet connection and try again.",
          {
            status: 503,
            headers: {
              "Content-Type": "text/plain; charset=utf-8"
            }
          }
        );
      })
  );
});
