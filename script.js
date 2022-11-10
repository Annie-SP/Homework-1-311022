	`use strict`;

// // 2. **Задача на розворот числа:**

// const currentMaxValue = 4589;
// let reverseMaxValue;

// reverseMaxValue = Array.from(String(currentMaxValue)).reverse();
// reverseMaxValue = reverseMaxValue.join('');
// reverseMaxValue = +reverseMaxValue;

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'

// // 3. **Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:**

// const resultsArray = [1, 2, [3, [4]]];
// let productOfArray;

// productOfArray = resultsArray.flat(Infinity);
// productOfArray = productOfArray.reduce(
// 	(a, b) => a * b, 1);

// console.log(productOfArray); // 24 -->



// 1. **Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:**

const userNames = [ "Петрик Ольга Іванівна", 
					"Гнатюк Петро Антонович", 
					"Рудко Андрій Опанасович"];

let initials = userNames.map( 
	wholeUserName => { 
		return wholeUserName.split(' ').map((word) => word[0] + `.`).join('')
	}).sort();
	

console.log(initials);




//rkod true

// initials = userNames.sort();
// console.log('sort -->', initials);

// initials = initials.join(' / ');
// console.log('join -->', initials);

// initials = initials.split(' ');
// console.log('split -->', initials);

// initials = initials.map(word => word[0]);
// console.log('map -->', initials);


// initials = initials.join(".");
// console.log('join -->', initials);


// initials = initials.split('./.');

// console.log( initials);
