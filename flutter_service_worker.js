'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "62b8db98fdc849390f520c8cb63857fd",
"/": "62b8db98fdc849390f520c8cb63857fd",
"manifest.json": "0270073a6c2266c7db237e8f1ec8b809",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/lib/Language/en.json": "56b891bcff0a5b8bdf84a5158816800d",
"assets/lib/Language/ar.json": "99700c0c688fb8ea4d238bcfa82394d7",
"assets/NOTICES": "8f62f9588a50e6efa550252c22cb2551",
"assets/assets/images/facebook.png": "863dd51587339e125b260b4f2592bf90",
"assets/assets/images/apesLogo-.png": "7d235194c529be16dc7442348449a2b7",
"assets/assets/images/Games2Egypt.png": "56e6246f35c22eb70963994e623f730d",
"assets/assets/images/twitter.png": "dd2dcd343ebb62c14919bcb52da5a373",
"assets/assets/images/Shahid-Logo-1.png": "ae67da396ffead6673991ee4bcc3e524",
"assets/assets/images/serry.png": "6386e59c0911b3e02230e05a0fc5c9b3",
"assets/assets/images/instagram.png": "70e0b362b33b6e45405f4fedc202fe1d",
"assets/assets/images/foods.png": "033a8e7f10d5bacd57ad4c4a5dadb6be",
"assets/assets/images/FacebookCover.png": "9c4c3e48eb045e9dfb97fa903ca98451",
"assets/assets/images/youtube.png": "76f4715bcdbc116eed573db67ca096f9",
"assets/assets/images/Beta3Aflam.png": "c31a56da3c9ad1b91b5236744e1ad393",
"assets/assets/images/Cover.png": "29f08a16ed3543cbf1ead82c459432be",
"assets/assets/images/Raz3Wala7a2e2a.png": "6764c132b7f762dd0504b58fcb94aae3",
"assets/assets/images/el3ab_m3_serry_logo.png": "d05f7b5f5aa90dda81fe5b9e7a2632a8",
"assets/assets/images/watchit.png": "d0cdf9eec24d17767338f0800db8736d",
"assets/assets/images/Wall.jpg": "09dbb0c4336afe9ba0e468423feb25d4",
"assets/assets/images/placeHolder.png": "f8dcbea65cdb4252976054488b79d450",
"assets/assets/images/arcade.jpg": "3fe326825ce2d28fbd7aa85224e50f2b",
"assets/assets/images/OnTheRun.png": "f704717e77c9ad35eb69689a760705b4",
"assets/assets/images/Logo%2520PNG.png": "125c263fd26584ef3d7bdeb967d5e0a1",
"assets/assets/fonts/ArcadeClassic.ttf": "964111990ca3937960147b80e8d07e61",
"assets/assets/fonts/Calibri-Regular.ttf": "5d7c31b284ddb01fc1cbae0edc9ec210",
"assets/FontManifest.json": "53776266c4c64198ba589bb8245542ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/AssetManifest.json": "5a40f62c8fac049562083cf082d75da6",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"main.dart.js": "8a87b77e652e3bf4d2aac5f4a8ab3154",
"version.json": "f4e916a1982c6389b9363b0c80dcbe80",
"style.css": "b4624c10c60126aa90060bf790a9fcde",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"img/logo.png": "299998b9ce682db8b3660634fce1cbb4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
