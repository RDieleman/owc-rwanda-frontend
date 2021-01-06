/* eslint-disable no-restricted-globals */
const logMessage = (message, obj) =>{
    console.log(`[Service Worker] ${message}`, obj);
}

const cacheTargets = [
    "/",
    "/static/js/bundle.js",
    "/static/js/0.chunk.js",
    "/static/js/main.chunk.js",
    "/manifest.json",
    "/favicon.ico",
    "/main"
];

self.addEventListener("install", (event) =>{
    logMessage('Installing Service Worker...', event);
    event.waitUntil(
        //Open or create static cache
        caches.open('static')
            //Add static items to cache
            .then((cache) => {
                logMessage('Precaching App Shell');
                cache.addAll(cacheTargets);
            })
    );
});

self.addEventListener("activate", (event) =>{
    logMessage('Activating Service Worker...', event);
    return self.clients.claim();
});

self.addEventListener("fetch", (event) =>{
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if(response){
                    return response;
                }else{
                    return fetch(event.request);
                }
            })
    )
});