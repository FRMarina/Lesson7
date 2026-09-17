// Написать функцию, которая разворачивает вложенные массивы в один

const array: (number | number[])[] = [1, [2, 3], [4], 5, [6, 7, 8]];

//const result = [1, 2, 3, 4, 5, 6, 7, 8];

function openArray(arr: (number | number[])[]) {
  const res: (number | number[])[] = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((e) => {
        res.push(e);
      });
    } else {
      res.push(element);
    }
  });
  return res;
}
console.log(openArray(array));
