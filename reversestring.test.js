import reverseString from './reversestring';
test('Reversing a string', ()=> {
  expect (reverseString('hello')).toBe('olleh');
  expect (reverseString('Hello World')).toBe('dlroW olleH');
});
