/* eslint-disable no-restricted-globals */
const logMessage = (message, obj) =>{
    console.log(`[Service Worker] ${message}`, obj);
}
// Cache info
const cacheVersion = 5;
const cacheNameStatic = 'static';
const cacheNameDynamic = 'dynamic';

//Targets to cache in the static cache
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

// Service worker install event
self.addEventListener("install", (event) =>{
    logMessage('Installing Service Worker...', event);
    event.waitUntil(
        //Open or create static cache
        caches.open(`${cacheNameStatic}-v${cacheVersion}`)
            //Add static items to cache
            .then((cache) => {
                logMessage('Precaching App Shell');
                cache.addAll(cacheTargets);
            })
    );
});

//Service worker activate event
self.addEventListener("activate", (event) =>{
    logMessage('Activating Service Worker...', event);
    //delete old caches
    event.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if(key !== `${cacheNameStatic}-v${cacheVersion}` && key !== cacheNameDynamic){
                        logMessage('Removing old cache', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});

//Service worker fetch event
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
                            return caches.open(cacheNameDynamic)
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