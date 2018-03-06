const request = jest.genMockFromModule('../request');

request.getUserName = arr => 'foobar';

export default request