wStore.getSize = (obj) => {
    let _bytes = 0, _list = [], stack = [obj];
    while ( stack.length ) {
        let _val = stack.pop();
        if ( typeof _val === 'boolean' ) {
            _bytes += 4;
        } else if ( typeof _val === 'string' ) {
            _bytes += _val.length * 2;
        } else if ( typeof _val === 'number' ) {
            _bytes += 8;
        } else if ( typeof _val === 'object' && _list.indexOf(_val) === -1 ) {
            _list.push( _val );
            for( let i in _val ) { stack.push( _val[ i ] ); }
        }
    } return _bytes;
}

wStore.storage.cookie.checkCookie = (name) => {
    var _cookie = getCookie(name);
    if (_cookie != "") {
     alert("Cookie: " + _cookie);
    } else {
       console.warn('Cookie[Check] : Name', name, 'not found');
    }
  }