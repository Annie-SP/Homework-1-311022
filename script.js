`use strict`;
// **Задача про обчислення різниці часу**

// Напишіть функцію яка буде буде приймати 3 параметри

// - початкову дату (string)
// - кінцеву дату (string)
// - розмірність ('days', 'hours', 'minutes', seconds)

// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
// Приклади:

function durationBetweenDates (start, end, typeTimes) {
//  let firstDate = new Date(start, "DD MM YYYY HH:mm:ss");
//  let lastDate = new Date(end, "DD MM YYYY HH:mm:ss");

// if (typeTimes = 'seconds') {
// 	return parseInt(lastDate - firstDate) / 1000;
// } else if (typeTimes = 'minutes') {
// 	return  parseInt((lastDate - firstDate) / (1000*60) );
// } else if (typeTimes = 'hours') {
// 	return parseInt((lastDate - firstDate) / (1000 * 3600));
// } else if (typeTimes = 'days') {
// 	return parseInt((lastDate - firstDate) / (1000 * 3600 * 24));
// }
// }

let firstDate = new Date(start);
 let lastDate = new Date(end);

if (typeTimes == 'seconds') {
	return Date.parse((lastDate.getTime() - firstDate.getTime())) / 1000;
} else if (typeTimes = 'minutes') {
	return  Date.parse(((lastDate.getTime() - firstDate.getTime()) / (1000*60)) );
} else if (typeTimes = 'hours') {
	return Date.parse(((lastDate.getTime() - firstDate.getTime()) / (1000 * 3600)));
} else if (typeTimes = 'days') {
	return Date.parse(((lastDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)));
}
return durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds');
}


durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'days');

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));  // поверне '86400 seconds'*
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days');  // поверне '362 days'*



// **Задача про перетворення об'єкту**

// Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), 
// а значення - його ціна.
// Напишіть функцію яка буде всі ключі переводити у нижній регістр, 
// \а всі ціни буде заокруглювати до двох знаків після коми.
// Приклад:

// приклад об'єкту*
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAnGEs: '48.7584',
};

function optimizer(data) {
  // тут ваш код*
	return Object.fromEntries(
		Object.entries(priceData).map(([key, value]) => 
			[key.toLowerCase(), parseFloat((value)).toFixed(2)]
			));
};

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}*

// **Задача про рекурсію та ітерацію**

// Напишіть:

// 1. Функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

function recursiveOddSumTo(number) {

  if (number === 1){
  	return 1
  }
  return (number*(number % 2)) + recursiveOddSumTo(number-1) ; 

};

console.log(recursiveOddSumTo(1)) // 1*
console.log(recursiveOddSumTo(10)) // 25*

// 1. Функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.

// Приклад:

function iterativeOddSumTo(number) {

	let result = 0;
  
 for (let i=1; i<=number; i+=2) {
	// result += i ;
	result = result + i;
 };
 return result;
};

console.log(iterativeOddSumTo(1)); // 1*
console.log(iterativeOddSumTo(10)); // 25*

