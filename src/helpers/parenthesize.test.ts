import { parenthesize } from './parenthesize';

describe('parenthesize', () => {
  test.each<[string | undefined, string]>([
    [ 'hello', '(hello)' ],
    [ '', '' ],
    [ undefined, '' ],
  ])('should correctly parenthesize input', (input, expected) => {
    expect(parenthesize(input)).toEqual(expected);
  });
});
