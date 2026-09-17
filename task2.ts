// Написать функцию, которая проверяет является ли слово палиндромом

const word1 = "Анна";
const word2 = "Кабак";
const word3 = "Кот";

function isPalindrome(word: string) {
  const reversWordArray: string = word.split("").reverse().join("").toString();
  if (word.toLowerCase() !== reversWordArray.toLowerCase()) {
    return `${word} не палиндром.`;
  } else {
    return `${word} палиндром!`;
  }
}
console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));
