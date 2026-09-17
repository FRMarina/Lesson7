// Написать функцию, которая будет удалять дубликаты из массива, при этом исходный массив не меняется

// Использовать наиболее быстрое решение

const array: number[] = [1, 5, 7, 8, 5, 8, 3];
function deleteDuplicates() {
  const result: Record<string, number> = {};
  for (const e of array) {
    if (!result[e]) {
      result[e] = e;
    }
  }
  return Object.values(result);
}
console.log(deleteDuplicates());
