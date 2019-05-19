// 
// import logic
//

const _storageImports = ['get', 'set'];

_storageImports.map((s) => {
    let _set = document.createElement('script');
    _set.src = `./js/${s}.js`;
    document.getElementsByTagName('head')[0].appendChild(_set)
});