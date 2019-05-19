wStore.storage.cookie = {
    _ : document.cookie
};

wStore.storage.cookie.set = (cname, cvalue) => {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

wStore.storage.cookie.get = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
  
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}