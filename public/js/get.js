wStore.get = (type) => {
  if(type){
    if(wStore.storage[type]){
        return wStore.storage[type];
    }
    return console.error('GET Err - Cannot find storage type of ', type , ' value of ', type);
  }
  return console.error('GET Err - "Storage Type" is missing (local or session)');
}