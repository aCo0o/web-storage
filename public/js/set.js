wStore.set = (type, newValue) => {
    if(type && newValue){
        console.log('SET' , type , 'to' , newValue);
    } console.error('SET Err - Type and value is missing');
}