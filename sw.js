const CACHE_NAME = 'samchiri-v1';

// 설치할 때 기본 페이지 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/schedule.html'
      ]);
    })
  );
  self.skipWaiting();
});

// 활성화될 때 이전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 요청이 올 때 캐시에서 불러오거나 동적 아이콘 처리
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
