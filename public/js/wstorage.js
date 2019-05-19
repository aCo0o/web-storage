const web_storage = {} || new Object || this;
let wStore = web_storage; 

wStore.storage = {
    local : localStorage,
    session : sessionStorage,
    cookie : {
        c : document.cookie,
        alert : ()=> alert(document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
    },
    cache : {
        new : {},
        caches : window.caches,   
        appCache : window.applicationCache
    },
};

window.wStore = web_storage;
console.log(wStore);