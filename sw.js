self.addEventListener('install', (e) => {
  console.log('Service Worker: Đã cài đặt');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});