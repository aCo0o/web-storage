const web_storage = {} || new Object;
let wStore = web_storage; 

wStore.storage = {
    local : localStorage,
    session : sessionStorage,
};

window.wStore = web_storage;
console.log(wStore);