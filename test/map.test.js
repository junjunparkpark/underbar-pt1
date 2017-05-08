_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });


  // My Test Additions:

  it('maps every value of each index of a string into an array of elements that have been passed through a callback function', () => {
    const str = 'hello';
    const mappedStr = _.map(str, (el) => el + el);
    expect(mappedStr).toEqual(['hh', 'ee', 'll', 'll', 'oo']);
  });
});