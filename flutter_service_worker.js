'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "62615bb728af406c7952d7e1aa9367b2",
"assets/AssetManifest.bin.json": "22004a119f42254403fb40ccc227850e",
"assets/AssetManifest.json": "9869c50762bf870952e7e7a0bdea7b4a",
"assets/assets/abhimanyu.png": "c9c0962a600017ec4468cbdca8fe713f",
"assets/assets/anant.png": "9921965bcc242598fb8feb51bf466711",
"assets/assets/anil%2520jat.png": "e3bcc2cc0826a0a2a54c1ccbffa17276",
"assets/assets/anil.png": "13791869ac40982737267d9e285a8dac",
"assets/assets/anjana.png": "cb01638e3b1a31248ee9efc01c4d0a70",
"assets/assets/anjor.png": "25ec86a27dc25dc483d70267a0ec9938",
"assets/assets/anurag.png": "3654bc2fa30b69341a82163271c2f2cd",
"assets/assets/background_logo.jpg": "cc3961858c04e2ba8287270b473245f9",
"assets/assets/contact_form.xlsx": "06f6069ac8c4852183601aead60b2a11",
"assets/assets/event1.jpg": "ed2d87c8d85c49005f679abd3af18d1d",
"assets/assets/harshit.png": "3220a6808c7a48f1b114b5e9ddc2f63e",
"assets/assets/heeru.png": "1754082fad576b61e3803da5a62e3493",
"assets/assets/joint_secretary.jpg": "93fe21c43e10c25ff18ddafa2edcee34",
"assets/assets/lakhan.png": "c557ce49ba4a7f331cab5e94dc50edc6",
"assets/assets/librarian.jpeg": "3a7d7d920738a14683e934fbb7cb07b7",
"assets/assets/logo.jpg": "a398c7fe94a38f5d400a2c95299231f5",
"assets/assets/manish.png": "496a1889cedd7d6c3d200001ca878769",
"assets/assets/manohar.png": "e9211a49618a37032ce2df76c5427578",
"assets/assets/mohan.png": "fcfd49f51e4ed05c49e6acfd0fac96e5",
"assets/assets/narendra.png": "4e9c7070c79a32d09cce283e276fc3d9",
"assets/assets/poonam.png": "3155bd428e929be1499cfb2b0c81f9f1",
"assets/assets/pramod.png": "d71bd9bcf8b28e7a2d726521e6319d0f",
"assets/assets/prashant.jpg": "f3de67d8e9fb2a62e89a15810a1c58f4",
"assets/assets/president.jpeg": "16cb83ee241807b5cbf1d2516fbc8bd6",
"assets/assets/priyanka.png": "26da4161950b33d98e8d5b0dae3a0d27",
"assets/assets/rajesh.png": "a973edba905936fde284aef4403e1fa5",
"assets/assets/rajkumar.png": "e0ee022c0514ec12ce71a21621a3ca07",
"assets/assets/richa.png": "999408b9cebbdb91cb675f8f95d791cf",
"assets/assets/sanju.png": "3753222afde6bc5a318fe533a4934f05",
"assets/assets/sarman.png": "8439a810564f360b89c7d7a9930a1997",
"assets/assets/secretary.jpeg": "690df956d2c53e8072d4e9c92b289626",
"assets/assets/tresure.jpeg": "2ce10152f55283e1c9d1452cd3c46a5d",
"assets/assets/umesh.png": "8559eeb3e3392feefdb1a76e973ac104",
"assets/assets/vibha.png": "1460961a51dae9d7002ddfeaea4413d9",
"assets/assets/vice_president.jpeg": "d09b097a523894abadc1319a0c500a11",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3d7c9df221e1b28e8b702901a98d7129",
"assets/NOTICES": "b8c7847e59a1db73d34c5f851108f60b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "dea6ef9da63c445df7e4b9c7d194811c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ecde466bbb2b137b6a155cf7d2ca6314",
"/": "ecde466bbb2b137b6a155cf7d2ca6314",
"main.dart.js": "2894bee789d7d7f071cb8f8aea477569",
"manifest.json": "93c08c2d41c51eea1ab89e4a4314035f",
"version.json": "d286eb6ac16c0e8b1c2be83578f6aee0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
