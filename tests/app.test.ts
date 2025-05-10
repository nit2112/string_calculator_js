const StringCalculator = require('../src/app');

describe('App.add', () => {
  test('returns 0 for empty string', () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  test('returns 1 for string 1', () => {
    expect(StringCalculator.add("1")).toBe(1);
  });

  test('returns 6 for string 1, 5', () => {
    expect(StringCalculator.add("1, 5")).toBe(6);
  });

  test('allow / delimeter for string "1\n2,3"', () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
  });

  test('allow diffrent delimeters for string "//;\n1;2"', () => {
    expect(StringCalculator.add("//;\n1;2")).toBe(3);
  });

  test('throw exception for negative number', () => {
    expect(() => { StringCalculator.add("1, -1") }).toThrow("Negative numbers not allowed: -1");
  });
});
