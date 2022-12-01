`use strict`;
//1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
//Використайте оператор розширення:**
    
    // console.log(addThemAll(2,4)); // 6*
    // console.log(addThemAll(1,2,3,4)); // 10*
    // console.log(addThemAll(5,5,10)); // 20*
    
    // function addThemAll (a, b, ...args) {
    // 	let sum = a + b;
    // 	for (let arg of args){
    // 		sum += arg;
    // 	}
    // 	return sum;
    // }

    // тут пишете свій код*

// 2. **Задача на використання замикання. Напишіть функцію яка працює таким чином: 
// `multiply(a)(b)` *// a * b***
    
    // console.log(multiply(5)(5))		// 25*
    // console.log(multiply(2)(-2))	        // -4*
    // console.log(multiply(4)(3))		// 12*
    
    // function multiply(a) {
    // // тут ваш код*
    //     function mylti(b){
    //         return a * b;
    //     }
    //     return mylti;
    // }
    
// 3. **Напишіть функцію яка буде використовуватись для сортування масиву фільмів. 
    //Функція буде приймати два аргумента:**
//     - властивість за якою треба посортувати
//     - опцію напрямку сортування, зростання чи спадання
    
    // const movies = [
    // {
    // movieName: 'The Thing',
    // releaseYear: 1982,
    // directedBy: 'Carpenter',
    // runningTimeInMinutes: 109,
    // },
    // {
    // movieName: 'Aliens',
    // releaseYear: 1986,
    // directedBy: 'Cameron',
    // runningTimeInMinutes: 137,
    // },
    // {
    // movieName: 'Men in Black',
    // releaseYear: 1997,
    // directedBy: 'Sonnenfeld',
    // runningTimeInMinutes: 98,
    // },
    // {
    // movieName: 'Predator',
    // releaseYear: 1987,
    // directedBy: 'McTiernan',
    // runningTimeInMinutes: 107,
    // },
    // ];
    
    // console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
    // console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
    // console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
    
    // function byProperty(property, direction) {

    // // тут ваш код*



    // }
    
// 4. **Напишіть функцію detonatorTimer(delay), яка виводить в консоль 
    // число кожну секунду, починаючи з delay (ціле число) 
    // і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:**
//     - Використовуючи setInterval
//     - Використовуючи вкладений setTimeout
    
    detonatorTimer(3);
    // 3
    // 2
    // 1
    // BOOM!*
    
   function detonatorTimer(delay) {
    // тут ваш код*	
        let timer = setInterval (function () {
            console.log(delay);
            if (delay === 0 ) {
            console.log('BOOM!');
            
        }
        delay--;
        }, 1000);

}

//         if (delay === 0 ) {
//             console.log('BOOM!')
//         }
//         else 
//         delay -=1;
//         console.log(delay);
// }
    
    

 
    
// 5. **Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. Наприклад:**
    
//     let me = {
//     name: 'Mykola',
//     residency: 'Lviv',
//     gender: 'male',
//     age: 31,
//     hobby: 'crafting',
//     defaultMood: 'focused',
//     currentMood: 'sleepy',
//     introduce() {
//     console.log(`My name is ${this.name} and I live in ${this.residency}`);
//     },
//     prognose() {
//     console.log(`I hope that next year I'm gonna be ${this.age+1}`);
//     },
//     describeMyMood(){
//     console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
//     }
//     }
    
//     me.introduce();
//     me.prognose();
//     me.describeMyMood();
    
//     Можете описати скільки хочете властивостей і не менше 2 методів.
//     Не соромтесь)
    
// 6. **А тепер зробіть всі свої методи з задачі `5` прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:**
    
//     let securedSelfIntroduce = *// якийсь код*
//     let securedSelfPrognose = *// якийсь код*
//     let securedSelfDescribeMyMood = *// якийсь код*
    
//     setTimeout(securedSelfIntroduce, 1000); *// виведе коректний результат*
//     setTimeout(securedSelfPrognose, 2000); *// виведе коректний результат*
//     setTimeout(securedSelfDescribeMyMood, 3000); *// виведе коректний результат*
    
// 7. **Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.**
    
//     function someFunction // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль
    
//     function slower(func, seconds) {
//     *// тут ваш код для декоратора*
//     }
    
//     let slowedSomeFunction = slower(someFunction, 5); *// обгортаєте свою довільну функцію 'someFunction' в декоратор*
    
//     slowedSomeFunction(/*якісь аргументи*/) *// викликаєте декоратор*
    
//     *// виведе в консоль "Chill out, you will get you result in 5 seconds"
//     //...через 5 секунд виведе результат роботи 'someFunction*'