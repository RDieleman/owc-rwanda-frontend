/* eslint-disable no-restricted-globals */
const logMessage = (message, obj) =>{
    console.log(`[Service Worker] ${message}`, obj);
}

self.addEventListener("install", (event) =>{
    logMessage('Installing Service Worker...', event);
});

self.addEventListener("activate", (event) =>{
    logMessage('Activating Service Worker...', event);
    return self.clients.claim();
});

self.addEventListener("fetch", (event) =>{
    logMessage('Fetching something...', event);
    event.respondWith(fetch(event.request));
});