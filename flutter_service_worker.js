'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8c81d44a1c3c9b8ac29fdfe77ac69ef0",
"index.html": "c86a0d72bc49711dca8c74a254fcd252",
"/": "c86a0d72bc49711dca8c74a254fcd252",
"CNAME": "bc158ed8c1414db3d1bcfeaf0b8a9b18",
"main.dart.js": "43b31eee8ade73bb0f7ee22ef665c619",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9161e869a1083833e100c7dd240bb607",
"icons/Icon-192.png": "ca0f3d7b1a2fd6c75de1c74350b3720a",
"icons/Icon-maskable-192.png": "821a64a902b26d14f10d91d312c6f1ef",
"icons/Icon-maskable-512.png": "4e02a5eeec69987dc4e578ea46df5dcd",
"icons/Icon-512.png": "4e02a5eeec69987dc4e578ea46df5dcd",
"manifest.json": "b8cbe88ec32e56cac834050a77079892",
".git/config": "c9bd8983969782a1d7a760048f5ee063",
".git/objects/0b/77353e10b2e539cf014088bffc4a5fb78943ed": "88f24c161c58111ecc0dcfec2d4d7b56",
".git/objects/c9/428c49246867ab0b07cb769e0f3b7cdb1e5cd0": "99b5a76f7109978b6714f3ac4af31bda",
".git/objects/4e/f4e792b8fa9ddb9670a4b4a77db4d3681e0715": "6db0153d5170a713518ee8544b8a050b",
".git/objects/pack/pack-2985317d08b61a0490d50bb1f0d69e44d26741ba.pack": "c7dba0b9f41223275743a41249d08aba",
".git/objects/pack/pack-2985317d08b61a0490d50bb1f0d69e44d26741ba.idx": "bb20ac61e78c52835e9ac0aa7e9f2b62",
".git/objects/07/d51a36cff7e4f97dbb60bf6a43d15845c7a38c": "650c284027eaddd3250df949c4329484",
".git/objects/96/93987262f5c5eae1de27373bdf8c77ef584b07": "24870037922a4baa6601b46603ed99e3",
".git/objects/f0/3dde191268c360672c4d44eb22c3d1a61576a1": "38e72455a6595f80caa82fd35967ab33",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "70d8b2115e045962365a0e862d54e4a0",
".git/logs/refs/heads/main": "70d8b2115e045962365a0e862d54e4a0",
".git/logs/refs/remotes/origin/HEAD": "56aa6b021d8bde6866c7bbcf00db886f",
".git/logs/refs/remotes/origin/main": "04e715d94740df6ca579ce0b8d1eebb8",
".git/refs/heads/main": "8bdac0ba4796138580deaf01c960788f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8bdac0ba4796138580deaf01c960788f",
".git/index": "f5914f924a1516c58bf373bc173b77cd",
".git/packed-refs": "38abe84859b43c300efe8d797141cf10",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/FETCH_HEAD": "b6a194c932c5d919930f361f9dab1bbc",
".git/sourcetreeconfig": "5d8616477a6862fcd70e5a6e71990a06",
"assets/AssetManifest.json": "45ee005b3ad61902b9900a293315bbb7",
"assets/NOTICES": "5205718c288cea1f4213010b2f6ffda1",
"assets/FontManifest.json": "7392991b2a6f699f09e2754f332eb51c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "0bb3363959eda5b020aab12d84db47fc",
"assets/AssetManifest.bin": "ad9fa8820f63f8b61c73ac5292cf5243",
"assets/fonts/MaterialIcons-Regular.otf": "eddb662d0791499f502176f7036e4991",
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
