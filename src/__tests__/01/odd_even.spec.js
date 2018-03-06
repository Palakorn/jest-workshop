import oddEven from '../../01_getting_started/odd_even';

describe('oddEven', function () {

  it('adds 1 + 2 to equal odd', () => {
    expect(oddEven(1, 2)).toBe('odd');
  });

  it('adds 2 + 2 to equal even', () => {
    expect(oddEven(2, 2)).toBe('even');
  });
});
