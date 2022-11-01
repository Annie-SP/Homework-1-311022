	`use strict`;

// 2. **Задача на розворот числа:**

// const currentMaxValue = 4589;
// let reverseMaxValue;

// reverseMaxValue = (Array.from(String(currentMaxValue))).reverse();
// reverseMaxValue = reverseMaxValue.join('');
// reverseMaxValue = +reverseMaxValue;

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'

// 3. **Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:**

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray;

// productOfArray = resultsArray.flat(Infinity);
// productOfArray = productOfArray.reduce(
// 	(a, b) => a * b);

// console.log(productOfArray); // 24 -->



// 1. **Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:**

// const userNames = [ "Петрик Ольга Іванівна", 
// 					"Гнатюк Петро Антонович", 
// 					"Рудко Андрій Опанасович"];
// let initials;

// // initials = (userNames.sort()).map(
// // 	(user) => user.charAt(0));



// initials = userNames;

// // // initials = userNames.map (
// // // 	(user) => user.charAt(0));

// initials.forEach(
// 	(user) => (user.toString()).charAt(0)
// 	);
	

// // // console.log(userNames);

// console.log(initials); // [ "Г.П.А", "П.О.І", "Р.А.О"]



