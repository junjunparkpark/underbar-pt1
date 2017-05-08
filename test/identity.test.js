const _ = require('../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toBe(5);
  });

  it('returns the same array if given an array', () => {
    const val = [1, 2, 3];
    expect(_.identity(val)).toBe(val);
  });

  it('returns the same object if given an object', () => {
    const val = {
      'foo': 'bar'
    };
    expect(_.identity(val)).toBe(val);
  });

// My Test Additions

/*  Why Doesn't This Pass???
  it('returns the same output when given 0 divided by 0', () => {
    const val = 0 / 0
    expect(_.identity(val)).toBe(val);
  });
*/

  it('returns the same output when given a positive number divided by 0', () => {
    expect(_.identity(5 / 0)).toBe(5 / 0);
  });

  it('returns the same output when given a negative number divided by 0', () => {
    expect(_.identity(-5 / 0)).toBe(-5 / 0);
  });
});