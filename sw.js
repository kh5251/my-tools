
const CACHE_NAME = 'easytools-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css'
];

// 설치: 캐시 파일 저장
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 요청 가로채기: 오프라인이면 캐시에서 꺼내줌
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
