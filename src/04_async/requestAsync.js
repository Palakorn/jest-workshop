const http = require('http');

export default {
  getUserName: (memberId) => {
    return new Promise( (resolve, reject) => {
      // This is an example of an http request, for example to fetch
      // user data from an API.
      // This module is being mocked in __mocks__/request.js
      http.get('http://example/request/'+memberId, response => {
        let data = '';
        response.on('data', _data => (data += _data));
        response.on('end', () => resolve(data));
      })
      .on('error', reject('User with '+ memberId +' not found.'));
    });
  }
}
