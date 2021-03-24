'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3a178764e00e05f959b143965e5323d6",
"/": "3a178764e00e05f959b143965e5323d6",
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
"main.dart.js": "546cda87d7cbcc7a719abe778d513ead",
".git/config": "8473972e2626e934730eb94ea9daf514",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/76/04b4f8392185b32d8371165f2712b9de982787": "5de396649e7e42c85ba3fd2e566f2ddc",
".git/objects/50/bcf88103e30cf9fb5d3a0690e2f41632b0226a": "8af7bf5a8ffaf18812a78052a04b0cc4",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/69/e219dcdca3776c28da248ca61b616361cedca8": "f83690f9c49a0abb0ce7eb87e2eebdac",
".git/objects/b2/ee7bd8f2131bd66d8b5148abf9c42ec2e9a0e1": "03261e618b510d6707043ce6b0f6c696",
".git/objects/b0/29f2ff6a192eb627ce4d69f86305f939da3eaa": "5210b7d2b91b4d6e639549821a1b5a8f",
".git/objects/29/9b9e267971b1e808b6dc6c1d1e7191cbda8ca2": "78b7386a4576b19ea41faf7ac84f19cf",
".git/objects/15/4fb2191e8dc1c969375515c1b1ee71d2041e8d": "82461ca62e38242810f398bd855c0078",
".git/objects/42/b4f27270d9a539462c4aec7eaca38ab43c5fc0": "95b7540229de8bf214d9f94cc900f5e4",
".git/objects/7a/e1e781c98af8f7e4347103ac1a9fa72cbdbf19": "91efaeef501b6a249b368d9887e67213",
".git/objects/a5/f2baf3474d5c65da7f0e06831e3608f499392f": "862afdd1ddc8287ac0ba74365ad6eff9",
".git/objects/26/ff187b9c8bf98487fab9789ca45b00a5246c8e": "50030364a0ce3cbb8fe1b7c67692c711",
".git/objects/62/44a496549e6ff1df6c544a2b0121c8dade77fb": "64dcd640776cdc2ebcd1cda2556c4d02",
".git/objects/62/5ef2371b18dd9c08118633cddd0f795562b564": "738bef99ef09bf814d02cd3970bbcb12",
".git/objects/62/32e06ec2a6ada22302920f1baf6627a44ee745": "ba550f41d1bb630e0d752842e8eb361a",
".git/objects/80/2f1081320a53726eab59bedb3efbc6f755d174": "51a645e131b562940c5ae40683b2326e",
".git/objects/06/2c6f3a4e4d4aafdc062390f49c0bde7c3e44ff": "93268b32dd94f3c434add70e440d5dc3",
".git/objects/95/9467791bd7f40779503abb1e63654262f3d006": "80865dde09a0b560a7062e21355f8d8c",
".git/objects/95/01f29edea6e10dbb91415a6cc45e3730150173": "0c22d53cc2ff4f8c35a43f483bd04e17",
".git/objects/77/1c9f9ed8b6137917ea4ed7f7be2fcf8829da5d": "d07bd39bdd9494a04a34220298e50334",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/75/ea15117c3f39977adaf10fe6309a66e4707133": "a3816b9b9004b867085e276a2e25f18e",
".git/objects/b3/3fed825a9f64858570695bf456511c7c99fb2b": "6ef72fbdefcfe40983d8884e854e5b3c",
".git/objects/64/2a0689a7d879a300e36a9ddc63778e7bfecde0": "57ca5489f130f86069dfb7dd53605cd3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/39/4a9f781cedaa283a11b3b8b43c9006f4e5bac7": "dc48c307ace7bb07a8d585cf5e472714",
".git/objects/44/e23b6cde95ec4fc963b38d1413f5609bae2565": "014de62f8ecd8f6a3ed91214f1439107",
".git/objects/44/2cd425ed51073f6bece2c06ac28603da713d7b": "6a44c4780105d853b4ac5417a8e3cf0a",
".git/objects/48/b61a52ce3197a39419bb7de5f89a75f953285f": "01d48b2bcb460c7fdff071d51d9ce700",
".git/objects/48/14d431795835591e0cfe53a807ce5bbb008ed5": "ff85f8287e7eab64856bd1348b253369",
".git/objects/25/deba8b15e76b9db08599ebe068b7c9395320dd": "a2e0a811bd036d882a3f4a9fb1fa554e",
".git/objects/7f/69087e6b31429d4037cb432d0c08ac2b4f7ed1": "0a0d149f49b7ad6f82127db32741df4e",
".git/objects/f5/cb0c668018432320efd499a6f015cba1ada72c": "0fbe1f6fc0dc657607391efd4683b305",
".git/objects/a8/b700d1d733bd1be854c989ea5238f673498f26": "e69149d45477bb5d9e215467c3110c91",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e4/db21498f09f1afd11d46d7897130991d02c102": "50d8f71368841b57cb8d878c33786e08",
".git/objects/f7/bb54c62cc59cf11d1dbfd775a58f6a158ae9d2": "51a986e514c4bba4dc94c511a997f409",
".git/objects/5c/8add4e30bc644275480464ec2bff4336db9b3d": "e0c84ed289361bfd388c06fb2f84fe56",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/90/cf9d8bd74916c8d731dc72a68dc7e2390c70d8": "f5868a6857bd25c7b00186dd1d133525",
".git/objects/c3/728ea9b45faaec50e251bac56953d6a2715a4a": "cdbab505ecba1ea04cdc70672333c785",
".git/objects/1d/63f774c0d3db03d3e5648d315579f34ea2571b": "cc4ae408d885ec197e89be3c9e2e374c",
".git/objects/12/200e7825ebe513b7368df5dc0bfcf9950e0711": "2f8673806c43241a4cb56c89f5d24265",
".git/objects/12/3554c9e78c465c7a8c9ed977347f0213aad72c": "ed5a056aa33c099481cb8a9657ccd82a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/63/9769ec0c9ff3d98e91d4110cb03ec9db6d6b74": "ac8328f3266e33db95bdcd5472775b5c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/4c/515a1516c6c0c0be2fe498cfe69c03036404b3": "d5806e647b72404e891a1b6b9d568440",
".git/objects/2c/ecb9a4225621c64028768378216c0d345ac3b9": "5717c461f079aec8dc5e89b0dd026d75",
".git/objects/85/d024709bc72cfaf569a6952ec931a302160918": "bc41361acd65f6af0a48a3cad839e992",
".git/objects/c9/a8697a6846e1da63f0cfa695558af08967b64e": "de1a772243c020f21329e2f437b02f05",
".git/objects/35/9d1df06180db55f518842309f472751d767ed2": "18b452b8b18a3dcf367a64f7a93b3f35",
".git/objects/28/c259c56390a7e16a6ec66996eddfe291c6d2ba": "b41323bb648b0fc5208d815e8ba1e427",
".git/objects/18/3343422243c1845b678f340a5140518dfc4f0d": "5ebdaf738e53eca6281417070c9b27df",
".git/objects/18/dfe779310b8f766ef612d4af38f26bd959efa9": "85d0d21b52893907aa4c21262e6c178a",
".git/objects/ac/e4bd7ed8b60b2c12b527355f4457385bbc9679": "ec2c25c3daa807d6e934eab116bd19e0",
".git/objects/17/778c715ef6b9ec312a2a15413aacf77621b028": "cb13a646b81d9575f86682cddfc39c71",
".git/objects/a7/f37dcc4ec0bbf50c3509e290748816d0865c29": "b1ccb7bbacd0a12ec8b4efd8b00caad1",
".git/objects/e8/c57c02d874a7fb619640fe739a96ed2993a9ed": "8fc615005fe926619ecd57b055795490",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/8b15855dade0158cbaa70e6a3b50048f541c4c": "1c7bd527cf4bacb458e579515430210f",
".git/objects/8f/f45343bba9833f3b1775c5dfb0a5d7979c5157": "a18cbe2702a2b27c8f0e254f95e9cf2d",
".git/objects/24/82ec708b8e4ca9d224b08aa345b756f0dd2468": "baf9483c78ea3742fe6d07c75c7eeefc",
".git/objects/2f/ede68225560d46a526f50668d9aa1b2067f498": "6fc0741990c89aafd2e6efc5d1a7b1a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "c2c60f3ccaa9f7a71065781902d0de69",
".git/refs/heads/master": "4a77155af79d9d039a5855529f16d7f0",
".git/refs/remotes/origin/master": "4a77155af79d9d039a5855529f16d7f0",
".git/logs/HEAD": "15986eb619c7391cf62a2fb0bd051a52",
".git/logs/refs/heads/master": "15986eb619c7391cf62a2fb0bd051a52",
".git/logs/refs/remotes/origin/master": "d7c3b8f9a5704913007785798624487c",
".git/index": "3c91944f10413a0103194cf5f81a0980",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"version.json": "f4e916a1982c6389b9363b0c80dcbe80",
"style.css": "b4624c10c60126aa90060bf790a9fcde",
"README.md": "2f7c3866aa657a84db06ee8eddc4dfed",
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
