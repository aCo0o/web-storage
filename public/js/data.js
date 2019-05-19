wStore._data = {
    array : [],
    object : {},
    string : ''
}

wStore.set = (ds , store) =>  {
    wStore._data[ds] ? wStore._data[ds] = store :
    console.error('_Data[SET] Err - Datastore:', ds, 'not found');
}

wStore.add = (ds, store) => {
    !wStore._data[ds] ? wStore._data[ds] = store :
    console.warn('_Data[ADD] Err - Datastore :', ds, 'already exist');
}