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

    "/manifest.json",

    "/images/icons/favicon.ico",
    "/images/icons/icon-help.svg",
    "/images/icons/icon-info.svg",
    "/images/icons/icon-skip.svg",
    "/images/icons/pwa-192x192.png",
    "/images/icons/pwa-512x512.png",
    "/images/icons/maskable_icon_x72.png",
    "/images/icons/maskable_icon_x96.png",
    "/images/icons/maskable_icon_x128.png",
    "/images/icons/maskable_icon_x144.png",
    "/images/icons/maskable_icon_x152.png",
    "/images/icons/maskable_icon_x384.png",
    "/images/icons/maskable_icon_x512.png",
    "/images/icons/icon-install.svg",
    "/images/placeholder-image.png",
    "/logo.svg",
    "/images/icons/icon-error.png",

    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2",

    "/",
    "/menu",
    "/projects",
    "/project",
    "/result",
    "/info",
    "/donation"
];

// Service worker install event
self.addEventListener("install", (event) =>{
    logMessage('Installing Service Worker...', event);
    event.waitUntil(
        //Open or create static cache
        InitCache()
    );
});

async function InitCache(){
    await caches.open(`${cacheNameStatic}-v${cacheVersion}`)
        //Add static items to cache
        .then(async (cache) => {
            logMessage('Precaching App Shell');
            await cache.addAll(cacheTargets);
        })
}


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
                                    cache.put(event.request.url, res.clone());
                                    return res;
                                })
                        });
                }
            })
    )
});