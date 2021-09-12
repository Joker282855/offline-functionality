const APP_PREFIX = 'OfflineFunctional-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CATCHE = [
    "./models/transaction.js",
    "./public/css/style.css",
    "./public/js/idb.js",
    "./public/js/index.js",
    "./public/index.html",
    "./routes.api.js"
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache: ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CATCHE)
        })
    )
})