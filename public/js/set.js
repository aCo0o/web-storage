wStore.set = (type, newValue) => {
    if(type && newValue){
        return console.log('SET' , type , 'to' , newValue);
    }
    return console.error('SET Err - Type and value is missing');
}

wStore.storage.cookie.setCookie = (cname, cvalue, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}