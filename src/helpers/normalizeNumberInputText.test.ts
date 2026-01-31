import { normalizeNumberInputText } from './normalizeNumberInputText.ts';

describe('normalizeNumberInputText', () => {
  it.each([
    ['', ''],
    [',', '0.'],
    ['000,', '0.'],
    ['00023,11', '23.11'],
    ['0003923002400', '3923002400'],
    ['0003923002400.00', '3923002400.00'],
    ['123,456', '123.456'],
    ['123,456.789', '123.456789'],
    ['123456', '123456'],
    [',123.456', '0.123456'],
    ['.123456', '0.123456'],
    ['0.123456', '0.123456'],
    ['123,,,456...789', '123.456789'],
    ['123.', '123.'],
    ['123.456.', '123.456'],
    ['123,456,', '123.456'],
    ['123,45dsAS=6 ,', '123.456'],
  ])('should normalize input "%s" to "%s"', (input, expected) => {
    const output = normalizeNumberInputText(input);
    expect(output).toBe(expected);
  });
});
