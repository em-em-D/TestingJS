import capitalize from './capitalize'
test('Capitalizing a string', () => {
    expect(capitalize("happy")).toBe("Happy");
    expect(capitalize('hello, we are programmers')).toBe('Hello, we are programmers');
  });
