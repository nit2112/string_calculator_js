const StringCalculator = require('../src/app');

describe('App.add', () => {
  test('returns 0 for empty string', () => {
    expect(StringCalculator.add("")).toBe(0);
  });
});
