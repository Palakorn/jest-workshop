import sayHi from '../../02_automatic_mock/say_hi';
import request from '../../02_automatic_mock/request';
jest.mock('../../02_automatic_mock/request');

describe('say hi', function () {

  it('with name', () => {
    request.getUserName.mockReturnValue('mock-name');
    expect(sayHi(1)).toBe('Say Hi to mock-name');
  });

});