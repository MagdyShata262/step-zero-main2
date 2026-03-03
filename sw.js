const CACHE_NAME = 'stepzero-cache-v1';
const urlsToCache = [
  '/',
  '/home.html',
  '/services.html',
  '/ourworks.html',
  '/ourworks1.html',
  '/aboutus.html',
  '/contactus.html',
  '/blog.html',
  '/privacy.html',
  '/terms.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/img/icons/icon-192.png',
  '/img/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
