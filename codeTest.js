import { expect } from "chai";
import { describe } from "mocha";
import { removeWords } from "./code.js";
import { getMostPopularPlaces } from "./code.js";


//test unitaire pour removeWords
describe('suppression du mot specifique', () => {
  const originalString = 'Hello, ceci est un test';
  const wordsToRemove = ['ceci', 'un'];

  const result = removeWords(originalString, wordsToRemove);
  expect(result).toBe('Hello, est test avec mots supprimer');
});

describe('traitement des chaines vides', () => {
  const result = removeWords('', ['hello', 'world']);
  expect(result).toBe('');
});

describe('chaine vide du coté du chaine a supprimer', () => {
  const result = removeWords('Hello world', []);
  expect(result).toBe('Hello world');
});

describe('sensible a la case', () => {
  const result = removeWords('Hello Java', ['java']);
  expect(result).toBe('Hello Java');
});

describe('multiples occurences', () => {
  const result = removeWords('this is a test test', ['test']);
  expect(result).toBe('is a');
});

//test unitaire pour getMostPopularPlaces(places)

test('retourner les quartier populaire', () => {
  const places = ['Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy'];
  const result = getMostPopularPlaces(places);
  expect(result).toBe('Itaosy Analamahitsy');
});

test('verification si vide', () => {
  const result = getMostPopularPlaces([]);
  expect(result).toBe('');
});

test('un seul quartier', () => {
  const result = getMostPopularPlaces(['Antananarivo']);
  expect(result).toBe('Antananarivo');
});

test('should handle ties', () => {
  const places = ['Analamahitsy', 'Itaosy', 'Analamahitsy', 'Itaosy'];
  const result = getMostPopularPlaces(places);
  // L'ordre des deux lieux peut varier en cas d'égalité, on vérifie juste qu'ils sont présents
  expect(result).toMatch(/Analamahitsy|Itaosy/g);
});

test('should handle non-string elements', () => {
  const places = ['Analamahitsy', 123, 'Itaosy'];
  expect(() => getMostPopularPlaces(places)).toThrow();
});