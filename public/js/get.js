wStore.get = (type) => {
    if(type){
        if(wStore.storage[type]){
            return wStore.storage[type];
        }
        return console.error('GET Err - Cannot find storage type of ', type , ' value of ', type);
    }
    return console.error('GET Err - "Storage Type" is missing (local or session)');
}

wStore.storage.cookie.getCookie = (cname) => {

    var name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  return "";
}