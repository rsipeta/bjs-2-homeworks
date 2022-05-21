// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = 0;
  arr.forEach(element => {
    if (element > max) max = element;
    if (element < min) min = element;
    sum += element;
  });
  
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}



// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  arr.forEach(element => { sum += element; });
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = -Infinity;
  let sum;
  arrOfArr.forEach(arr => { 
    sum = func(arr);
    if (sum > max) max = sum;
  });
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, result;

  min = arr[0];
  max = arr[0];
  arr.forEach(element => {
    if (element > max) max = element;
    if (element < min) min = element;
  });

  result = 0;
  if (min < 0 && max > 0) result = max - min;
  if (min < 0 && max < 0) result = Math.abs(min) - Math.abs(max);
  if (min >= 0 && max >= 0) result = max - min;

  return result;
}
