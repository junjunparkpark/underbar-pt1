const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });


  // My Test Additions:

  it('reduces a string of letters to consonants, *without* an explicit initial value for the accumulator', () => {
    const letters = 'Hack Reactor';
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const result = _.reduce(letters, (accumulator, currentValue) => {
      return !vowels.includes(currentValue) ? accumulator + currentValue : accumulator;
    });
    expect(result).toEqual('Hck Rctr');
  });

  it('reduces a string of letters to consonants, *with* an explicit initial value for the accumulator', () => {
    const letters = 'Hack Reactor';
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const result = _.reduce(letters, (accumulator, currentValue) => {
      return !vowels.includes(currentValue) ? accumulator + currentValue : accumulator;
    }, 'I love ');
    expect(result).toEqual('I love Hck Rctr');
  });
});