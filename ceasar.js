export default function ceasar (string, key){
  const newLetters = [];
  const newKey = key % 26;
  for(const letter of string){
    newLetters.push(getNewLetter(letter, newKey));

  }
  return newLetters.join('');
}


function getNewLetter(letter, key){


let newLetterCode = letter.charCodeAt();
if(newLetterCode >= 97 && newLetterCode <= 122){
  newLetterCode += key
return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));

} else if (newLetterCode >= 65 && newLetterCode <= 90){
  newLetterCode += key;
  return newLetterCode <= 90 ? String.fromCharCode(newLetterCode) : String.fromCharCode(64 + (newLetterCode % 90));
}
 else {
  return letter;
}

}
