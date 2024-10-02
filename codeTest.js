import { expect } from "chai";
import { describe } from "mocha";
import { removeWords } from "./test.js";

describe('suppression du mot specifique', () => {
  const originalString = 'Hello, ceci est un test avec des mots à supprimer';
  const wordsToRemove = ['ceci', 'un', 'des', 'à'];

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