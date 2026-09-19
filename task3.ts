// Напишите функцию, которая найдет максимальное и минимальное число в массиве

const array: number[] = [5, 2, -4, -8, 23, 55, 34, 0, 8];
function compareNumbers() {
  if (!array.length) {
    return { max: undefined, min: undefined };
  }
  let max = array[0] as number;
  let min = array[0] as number;
  for (const e of array) {
    if (e > max) {
      max = e;
    }
    if (e < min) {
      min = e;
    }
  }
  return { max, min };
}
console.log(compareNumbers());
