"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  
  let discriminant = b**2-4*a*c;
  //console.log(`D = ${discriminant}`);
  if (discriminant >= 0) {
    
    if (discriminant === 0)
    {
      if (a === 0) console.log("На ноль делить нельзя. D = 0, a = 0");
      else arr = [-b/(2*a)];
    }      
    else
      arr = [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (Number.isNaN(Number(percent))) { return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`; }
  if (Number.isNaN(Number(contribution))) { return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`; }
  if (Number.isNaN(Number(amount))) { return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`; }

  
  var today = new Date();
  //var kolDays = Math.round((date - today)/(1000*60*60*24)); // Количество дней
  var kolMonth = monthDiff(today, date);   //Math.ceil(kolDays / 30);
  console.log(`Количество месяцев: ${kolMonth}`);

  let credit = Number(amount) - Number(contribution);    // тело кредита
  let P = percent / 100 / 12;   // 1/12 процентной ставки (от 0 до 1)

  let paument = credit * (P + (P / (((1 + P)**kolMonth) - 1)))
  return Number((paument * kolMonth).toFixed(2));
}

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}