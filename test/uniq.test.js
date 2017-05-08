const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  // My Test Additions:

  it('de-dups values from an object', () => {
    const cohortPeopleLocations = {
      tim: 'California',
      kay: 'California',
      jun: 'Colorado',
      stephanie: 'Colorado',
      misha: 'Utah',
      janelle: 'Colorado',
      joey: 'Colorado',
      jose: 'Utah',
      kane: 'Texas',
      michael: 'Kansas',
      jon: 'New York'
    };

    expect(_.uniq(cohortPeopleLocations)).toEqual(['California', 'Colorado', 'Utah', 'Texas', 'Kansas', 'New York'])
  });
});