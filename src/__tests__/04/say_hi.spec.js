import sayHi from '../../04_async/say_hi';
jest.mock('../../04_async/requestAsync');

describe('say hi Promise', function () {

  it('with resolve', () => {
    expect.assertions(1);
    return expect(sayHi(1)).resolves.toEqual('Cherprang');
  });

  it('with expect in then', () => {
    expect.assertions(1);
    return sayHi(2).then(res => expect(res).toEqual('Orn'));
  });

  it('with reject', () => {
    expect.assertions(1);
    return expect(sayHi(9)).rejects.toEqual('User with 9 not found.');
  });

});