const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });


  // My Test Additions:

  it('returns true even when the array passed has multiple data types', () => {
    const arr = ['hello', 2, 'from', {}, 3, 'the other side'];
    expect(_.some(arr, element => element % 2 === 1)).toBe(true);
  });
});