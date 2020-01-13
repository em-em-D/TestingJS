import ceaserCipher from './ceasar_cipher';

test('Testing the cipher with different inputs', () => {
  expect(ceaserCipher('attack', 1)).toBe('buubdl');
  expect(ceaserCipher('Hello, we are programmers!', 5)).toBe('Mjqqt, bj fwj uwtlwfrrjwx!');
  expect(ceaserCipher('JavaScript is a great programming langage.It was invented by Brendan Eich!', 24)).toBe('HytyQapgnr gq y epcyr npmepykkgle jyleyec.Gr uyq gltclrcb zw Zpclbyl Cgaf!');

})
