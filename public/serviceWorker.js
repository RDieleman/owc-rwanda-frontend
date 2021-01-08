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
    "/manifest.json",
    "/static/js/main.chunk.js",
    "/static/js/bundle.js",
    "/static/js/0.chunk.js.map",
    "/static/js/0.chunk.js",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",

    "/images/icons/favicon.ico",
    "/images/icons/icon-help.svg",
    "/images/icons/icon-info.svg",
    "/images/icons/icon-skip.svg",
    "/images/icons/pwa-192x192.png",
    "/images/icons/pwa-512x512.png",
    "/logo.svg",

    "/menu",
    "/projects",
    "/project",
    "/donation",
    "/result",

    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2"
    //
    // "http://localhost:8080/charity",
    // "http://localhost:8080/donation",
    // "http://localhost:8080/project"
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
                            return res;
                        });
                }
            })
    )
});