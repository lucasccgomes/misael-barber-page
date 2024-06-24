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
          '/icon/lowres.webp',
          '/icon/lowres.png',
          '/icon/hd_hi.png',
          '/icon/hd_hi.svg'
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
  