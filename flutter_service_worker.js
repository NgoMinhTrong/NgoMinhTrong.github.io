'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8c81d44a1c3c9b8ac29fdfe77ac69ef0",
"index.html": "aff28fddbeb2780d499a7dcd9c972ab1",
"/": "aff28fddbeb2780d499a7dcd9c972ab1",
"main.dart.js": "0302f7c36ac9e1f4db49d2763af25611",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9161e869a1083833e100c7dd240bb607",
"icons/Icon-192.png": "ca0f3d7b1a2fd6c75de1c74350b3720a",
"icons/Icon-maskable-192.png": "821a64a902b26d14f10d91d312c6f1ef",
"icons/Icon-maskable-512.png": "4e02a5eeec69987dc4e578ea46df5dcd",
"icons/Icon-512.png": "4e02a5eeec69987dc4e578ea46df5dcd",
"manifest.json": "b8cbe88ec32e56cac834050a77079892",
".git/config": "c9bd8983969782a1d7a760048f5ee063",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/d7/fbb7030a98cffc4b888b0520465bda901071ec": "b6b67f4fac706a908ea24019abe20dfb",
".git/objects/4e/4c99bcc04ef47f3d7c7bafff42db87614f3cf7": "6ddeff0ba035ba9f97ed22464e488b6f",
".git/objects/pack/pack-a3c406dfb716acc49460c3a3e4ae21b602ab0665.pack": "e7628c7657c1901f69d1e99bd120c10c",
".git/objects/pack/pack-a3c406dfb716acc49460c3a3e4ae21b602ab0665.idx": "edb514a2a745d4da8c98ab67e1b57cbf",
".git/objects/5d/c9d091e73d940289b13e278cc5302dcdb991d0": "ddf1954ab0eb7dd0bdda21ceb778bee6",
".git/objects/08/0db2908ceb340e55d44ebe690213d3ef24829b": "b76f98d768952dea9a47e80ff9a9f51f",
".git/objects/a8/c4044585d1c78f2b3b64c10486bc6bae275436": "0031094ea50f956021a2f6ae0059014a",
".git/objects/2d/d26cc0e3eb1337d273eb404b2b746fd0ccf964": "96ebbf8d2c1cca15e2a2ca5a5345830d",
".git/objects/1b/d598bd3c9f314a3303f4cb05a6b3714589bc25": "3209d51fb9de7ed87df80e73628d801b",
".git/objects/47/313b6231bfdefa002a6efbe0a9253ca01b7def": "f54aaeba726ce3ab35226aae0b44db86",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "b799e4b5954d248b3a4bbcd97db16f19",
".git/logs/refs/heads/main": "b799e4b5954d248b3a4bbcd97db16f19",
".git/logs/refs/remotes/origin/HEAD": "5c4f425667ecf7252f22c93badaa6578",
".git/logs/refs/remotes/origin/main": "fafc42661f270430f357c5252a90d010",
".git/refs/heads/main": "1e7b81ca55604e5a18f869dc494f3fdd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "1e7b81ca55604e5a18f869dc494f3fdd",
".git/index": "babd2d0b5611d3279679f25ea77caa26",
".git/packed-refs": "421b3cb446c61cb622794c61a5f601f7",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/FETCH_HEAD": "bb7caa051d2727d469fe014a73d05ec5",
".git/sourcetreeconfig": "5f7cdec3d30d979233cf11e1d05dbb91",
"assets/AssetManifest.json": "45ee005b3ad61902b9900a293315bbb7",
"assets/NOTICES": "cc7b4af39e6ea54d50bb2d694d47a353",
"assets/FontManifest.json": "7392991b2a6f699f09e2754f332eb51c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "0bb3363959eda5b020aab12d84db47fc",
"assets/AssetManifest.bin": "ad9fa8820f63f8b61c73ac5292cf5243",
"assets/fonts/MaterialIcons-Regular.otf": "f65716219b503bace999a690f1ad0be1",
"assets/assets/images/ic_plate.png": "86b757daf973226fb0a68e57a320e4ba",
"assets/assets/images/circle.png": "aeefb982d3a12b75a1accafacc6d16d2",
"assets/assets/images/logo.png": "9161e869a1083833e100c7dd240bb607",
"assets/assets/langs/vi.json": "0aa04dd607717334f7463c2a704af2ca",
"assets/assets/icons/ic_close.svg": "8f78d12a7adaa98892d84ec2cc57209f",
"assets/assets/icons/ic_user.svg": "46c50632059868bbb21ab8a4108c689f",
"assets/assets/icons/ic_eye.svg": "80b130c5b656dc0601bc1096881764f0",
"assets/assets/icons/ic_diamon.svg": "59d1d6d7988fe87d7ec196c9a13f6b15",
"assets/assets/icons/ic_eye_off.svg": "1cb5e17d93c4d8d508b7441a26ad8e01",
"assets/assets/fonts/SF-Pro-Text-Light.otf": "753fc9d460f7722614e34fe61ed1c073",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "9a7c849b216648913f216d20a21e9aae",
"assets/assets/fonts/SF-Pro-Text-Medium.otf": "ded5efe3e8ec62553c3b10f4edd4ca8d",
"assets/assets/gif/fplash.gif": "368539400e6f30759f2632282bcb1551",
"assets/assets/gif/loading.gif": "ac82d7c4e31fb757dc18dcff6d44d5bc",
"assets/assets/gif/bg.gif": "b6b0f2641ad9abe284caeed59b847ec4",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
