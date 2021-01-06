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
    "/main",
    "/images/icons/test-logo-144x144.png"
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
        //Try to fetch resource from caches
        caches.match(event.request)
            .then((response) => {
                if(response){
                    //Return found resource
                    return response;
                }else{
                    //Fetch new resource
                    return fetch(event.request)
                        .then((res) => {
                            //Open or create dynamic cache
                            return caches.open('dynamic')
                                .then((cache) => {
                                    //Add new resource and return result
                                    cache.put(event.request.url, res);
                                    return res;
                                })
                        });
                }
            })
    )
});