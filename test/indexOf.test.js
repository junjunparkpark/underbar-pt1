const _ = require('../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'baz')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'quux')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', 2)).toBe(3);
  });

  // My Test Additions:

  it('returns -1 when given a fromIndex that is larger than the largest index of a given array', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', 120)).toBe(-1);
  });

  it('returns the first matching index even when given a negative number as the offset', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', -10)).toBe(1);
  });
});