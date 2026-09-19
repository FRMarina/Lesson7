/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая возвращает объект в виде ключ (элемент массива) и значение (сколько раз элемент повторяется)

const array: string[] = ["orange", "apple", "banana", "apple", "orange", "orange"];

const result: Record<string, number> = { orange: 3, apple: 2, banana: 1 };
function countElem(arr: string[]) {
  const countObj: Record<string, number> = {};
  for (const e of arr) {
    if (!countObj[e]) {
      countObj[e] = 1;
    } else {
      countObj[e] += 1;
    }
  }
  return countObj;
}
console.log(countElem(array));
