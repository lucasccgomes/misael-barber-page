self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Precache files
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/icon/android-launchericon-48-48.png',
          '/icon/android-launchericon-72-72.png',
          '/icon/android-launchericon-96-96.png',
          '/icon/android-launchericon-144-144.png',
          '/icon/android-launchericon-192-192.png',
          '/icon/android-launchericon-512-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  