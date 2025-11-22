const CACHE_NAME = 'clean-inspection-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon.png',
  'https://unpkg.com/html5-qrcode',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

