'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8c81d44a1c3c9b8ac29fdfe77ac69ef0",
"index.html": "04ebb173facc1240fa8a1230e3fe7cfc",
"/": "04ebb173facc1240fa8a1230e3fe7cfc",
"main.dart.js": "56bda88197107f751a7b484cae5778c0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9161e869a1083833e100c7dd240bb607",
"icons/Icon-192.png": "ca0f3d7b1a2fd6c75de1c74350b3720a",
"icons/Icon-maskable-192.png": "821a64a902b26d14f10d91d312c6f1ef",
"icons/Icon-maskable-512.png": "4e02a5eeec69987dc4e578ea46df5dcd",
"icons/Icon-512.png": "4e02a5eeec69987dc4e578ea46df5dcd",
"manifest.json": "b8cbe88ec32e56cac834050a77079892",
"assets/AssetManifest.json": "b9da9ccaea765611c539ff2f5cbad663",
"assets/NOTICES": "a17506f5a151f5a98bdbc8aeba6baeb1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b8cf42f812b395daf63459f9bca78bb7",
"assets/fonts/MaterialIcons-Regular.otf": "35e7ea1498162c95a6776d0b7960c2d8",
"assets/assets/images/ic_plate.png": "2f55966e770e15a7d310f27f382381cc",
"assets/assets/images/bank1.png": "d2d1f8bb9d2c68b1bc72b5284ebe0f9b",
"assets/assets/images/img_animal_1.png": "aecd88d9c61c7345ae9f83d18d8c44c3",
"assets/assets/images/ic_bowl.png": "ffb638cbe5cd64c445e95185796a61f7",
"assets/assets/images/ic_coin_100.png": "1e83ebfe92b59f2af0458e3a0059a045",
"assets/assets/images/img_animal_2.png": "cfcdca0bcc54e7673a4376af5ca79cb7",
"assets/assets/images/img_animal_3.png": "5943f017ba2a62bbe93afa3bc7326982",
"assets/assets/images/circle.png": "aeefb982d3a12b75a1accafacc6d16d2",
"assets/assets/images/ic_coin_500.png": "40ad1610114f1c1395e35f593eba0957",
"assets/assets/images/img_animal_6.png": "3a4eaf35571b87fb4fb17e6ce004b2ba",
"assets/assets/images/img_animal_4.png": "9ac51497551b0cc1a7161204d68fef47",
"assets/assets/images/ic_audio_off.png": "818e3bc3866495f0d783e2db1225796b",
"assets/assets/images/img_animal_5.png": "162b9305d03b657c334d03235dfa52cd",
"assets/assets/images/logo.png": "9161e869a1083833e100c7dd240bb607",
"assets/assets/images/ic_coin_1.png": "bd5d5771ca41b63d2c68c8519fa62f21",
"assets/assets/images/bank.png": "f196f156918bc1302132c97525a240d3",
"assets/assets/images/ic_animal_6.png": "ff97e6c6ebfa15661567798817f8191b",
"assets/assets/images/ic_animal_5.png": "fa973bdfba205807dce195b0fdaecbb0",
"assets/assets/images/ic_animal_4.png": "331d33bb4a9d890de53dd9c657cb0bbe",
"assets/assets/images/ic_audio_on.png": "2d0c4a1e1a8938cc3efa20cf28238e8e",
"assets/assets/images/ic_animal_1.png": "98b925684ca5df5990ada25344099a09",
"assets/assets/images/ic_animal_3.png": "8ae215d80f71fb7b3726b86cf6502c66",
"assets/assets/images/ic_coin_10.png": "b24ba0d857b1332ecba95ee5fd6f0d82",
"assets/assets/images/ic_animal_2.png": "680bfc790c15cb7235b450cc07031087",
"assets/assets/icons/ic_success.svg": "bc1fa4c81885c7157385ee294e4fb8c4",
"assets/assets/icons/ic_error.svg": "c3339abaaeac35aff7f13fbdabbed976",
"assets/assets/icons/ic_close.svg": "8f78d12a7adaa98892d84ec2cc57209f",
"assets/assets/icons/ic_user.svg": "46c50632059868bbb21ab8a4108c689f",
"assets/assets/icons/ic_message.svg": "e5e67dc58f61f89a0ebf5d6d8f778199",
"assets/assets/icons/ic_admin.svg": "074b5edc4e03188423bd3c82ce2cff53",
"assets/assets/icons/ic_eye.svg": "80b130c5b656dc0601bc1096881764f0",
"assets/assets/icons/ic_diamon.svg": "59d1d6d7988fe87d7ec196c9a13f6b15",
"assets/assets/icons/ic_menu.svg": "9de3da008b8d12e06aab8ce0ad5fd7e4",
"assets/assets/icons/ic_eye_off.svg": "1cb5e17d93c4d8d508b7441a26ad8e01",
"assets/assets/gif/fplash.gif": "368539400e6f30759f2632282bcb1551",
"assets/assets/gif/start.mp3": "894fd923f9e70b90502bab5ab0cdad28",
"assets/assets/gif/audio.mp3": "84825b96d68395634833b3f2a5b64708",
"assets/assets/gif/loading.gif": "ac82d7c4e31fb757dc18dcff6d44d5bc",
"assets/assets/gif/bg.gif": "b6b0f2641ad9abe284caeed59b847ec4",
"assets/assets/gif/end.mp3": "e0ddbd6d36baf50b6fb27ba7f2bfd038",
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
