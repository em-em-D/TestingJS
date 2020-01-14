import ceaser from './ceasar';

test('Testing the cipher with different inputs', () => {
  expect(ceaser('attack', 1)).toBe('buubdl');
  expect(ceaser('Hello, we are programmers!', 5)).toBe('Mjqqt, bj fwj uwtlwfrrjwx!');
  expect(ceaser('JavaScript is a great programming langage.It was invented by Brendan Eich!', 24)).toBe('HytyQapgnr gq y epcyr npmepykkgle jyleyec.Gr uyq gltclrcb zw Zpclbyl Cgaf!');

})
