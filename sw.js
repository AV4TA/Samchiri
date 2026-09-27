const CACHE_NAME = 'samchiri-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/schedule.html'
];

// 설치할 때 파일 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// 요청이 올 때 캐시에서 불러오기
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
