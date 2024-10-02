// FONCTION REMOVEWORDS
export function removeWords(original, wordsToRemove) {
    const wordsToRemoveSet = new Set(wordsToRemove);
    const words = original.split(' ');  
    const filteredWords = words.filter(word => !wordsToRemoveSet.has(word));
    return filteredWords.join(' ');
  }

const originalString = 'Hello, ceci est un test avec des mots à supprimer';
const wordsToRemove = ['ceci', 'un', 'des', 'à'];

const result = removeWords(originalString, wordsToRemove);
console.log(result); 