// FONCTION REMOVEWORDS
export function removeWords(original, wordsToRemove) {
    const wordsToRemoveSet = new Set(wordsToRemove);
    const words = original.split(' ');  
    const filteredWords = words.filter(word => !wordsToRemoveSet.has(word));
    return filteredWords.join(' ');
  }

const originalString = 'Hello, ceci est un test';
const wordsToRemove = ['ceci', 'un'];

const result = removeWords(originalString, wordsToRemove);
console.log(result); 

const originalString2 = 'Hello, ceci est un autre Test';
const wordsToRemove2 = ['ceci', 'un', 'test'];

const result2 = removeWords(originalString2, wordsToRemove2);
console.log(result2); 


// FONCTION  getMostPopularPlaces(places) 
function getMostPopularPlaces(places) {

    const placeCounts = {};
    places.forEach(place => {
      placeCounts[place] = (placeCounts[place] || 0) + 1;
    });
  
    const sortedPlaces = Object.keys(placeCounts).sort((a, b) => placeCounts[b] - placeCounts[a]);
  
    return sortedPlaces.slice(0, 2).join(' ');
  }

  const votes = ["Analamahitsy", "Analamahitsy", "Itaosy", "Behoririka", "Itaosy", "Itaosy", "Andravoahangy", "Analakely"];
  const mostPopular = getMostPopularPlaces(votes);
  console.log(mostPopular); 