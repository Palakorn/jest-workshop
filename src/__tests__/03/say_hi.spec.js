import sayHi from '../../03_manual_mock/say_hi';
jest.mock('../../03_manual_mock/request');

describe('say hi', function () {

  it('with name', () => {
    let actual = sayHi(1);
    expect(actual).toBe('Say Hi to foobar');
  });

});