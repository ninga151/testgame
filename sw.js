if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log('service worker registered');
        })
        .catch(function() {
            console.warn('service worker failed');
        });
}
var CACHE_NAME = 'static-v1';
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/sw.js',
                '/manifest.json'
            ]);
        })
    )
});
var CACHE_NAME = 'static-v1';
self.addEventListener('activate', function activator(event) {
    event.waitUntil(caches.keys().then(function(keys) {
        return Promise.all(keys.filter(function(key) {
            return key.indexOf(CACHE_NAME) !== 0;
        }).map(function(key) {
            return caches.delete(key);
        }));
    }));
});
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(cachedResponse) {
        return
    }));
});
