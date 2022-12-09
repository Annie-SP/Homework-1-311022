`use strict`;
//1. Напишіть функцію `addThemAll` яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
//Використайте оператор розширення:**

    console.log(addThemAll());
    console.log(addThemAll(3));
    console.log(addThemAll(2,4)); // 6*
    console.log(addThemAll(1,2,3,4)); // 10*
    console.log(addThemAll(5,5,10)); // 20*
    
 //function addThemAll (a, b, ...args) {
//         const sum = 0;
//         return sum.reduce(args, (prev, next) => prev + next);
// };

    function addThemAll (a, b, ...args) {
        let sum;
        if (sum = a + b) {
            for (let arg of args){
            sum += arg;
        }
            return sum;
        } else if (sum = a){
            return a;
        } else
            return 0;
    }

    // тут пишете свій код*

// 2. **Задача на використання замикання. Напишіть функцію яка працює таким чином: 
// `multiply(a)(b)` *// a * b***
    
    console.log(multiply(5)(5))		// 25*
    console.log(multiply(2)(-2))	        // -4*
    console.log(multiply(4)(3))		// 12*
    
    function multiply(a) {
    // тут ваш код*
        function mylti(b){
            return a * b;
        }
        return mylti;
    }
    
// 3. **Напишіть функцію яка буде використовуватись для сортування масиву фільмів. 
    //Функція буде приймати два аргумента:**
//     - властивість за якою треба посортувати
//     - опцію напрямку сортування, зростання чи спадання
    
    const movies = [
    {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
    },
    {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
    },
    {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
    },
    {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
    },
    ];
    
   console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
   //console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
    //console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
    

    function byProperty(property, direction) {    
        if (direction === '<') {
            return function(a, b){
                return a[property] < b[property] ? -1 : 1 ;
            }
        }
        if (direction === '>'){
            return function(a, b){
             return a[property] > b[property] ? 1 : -1;
            }
        }
        return 0;
    }




    
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
            if (delay === 0 ) {
                console.log('BOOM!');                         
                clearInterval(timer);
            } else 
                console.log(delay);
                delay--; 
        }, 1000);
}


//    function detonatorTimer(delay) {
//     let timer = setTimeout (function () {
// }

// function detonatorTimer(delay) {
//     // тут ваш код*	
//         let timer = setTimeout (function tick() {
			
// 		if (delay > 0 ) {
// 			console.log(delay);
//             delay--;
//         } else 
// 	      console.log('BOOM!');

// 		timer = setTimeout(tick, 1000);
// 		}, 1000);
		
// 	       clearTimeout(timer);
//    }
 

 
    
// 5. **Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки)
 // що ці властивості виводять. Наприклад:**
  
//     Можете описати скільки хочете властивостей і не менше 2 методів.
//     Не соромтесь)


 let aboutMe = {
    name: 'Hanna',
    residency: 'Varash',
    gender: 'female',
    age: 26,
    dream: 'Front-End Developer',
    car: 'Audi',
    defaultMood: 'happy',
    currentMood: 'upset',
    introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
    console.log(`I hope that next year I'm gonna be ${this.dream} and finally I'll buy a big and long awaited present for myself - ${this.car}`);
    },
    describeMyMood(){
    console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    },
    }

    aboutMe.introduce();
    aboutMe.prognose();
    aboutMe.describeMyMood();

    
// 6. **А тепер зробіть всі свої методи з задачі `5` прив'язаними до 
    //контексту свого об'єкту - аби вони були захищені від перезапису об'єкту
    // і їх можна було викликати в таймері:**
    
    let securedSelfIntroduce = aboutMe.introduce.bind(aboutMe); // якийсь код*
    let securedSelfPrognose = aboutMe.prognose.bind(aboutMe);// якийсь код*
    let securedSelfDescribeMyMood = aboutMe.describeMyMood.bind(aboutMe); // якийсь код*
    
    setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат*
    setTimeout(securedSelfPrognose, 2000); // виведе коректний результат*
    setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат*
    
// 7. **Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.**
    
    // function someFunction(a, b){
    //     console.log(a - b);
    // } // тут напишіть довільну функцію яка робить якусь роботу 
    // //зі своїми аргументами та виводить результат в консоль

    // function slower(func, seconds) {
    //         // тут ваш код для декоратора*
    //     function wrapper(){
    //         console.log("Chill out, you will get you result in 5 seconds");
    //     }
    //     return wrapper;
    //    } 

    //    let timer = setTimeout(someFunction, 5000);

    
    // let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*
    
    // slowedSomeFunction(5, 4) // викликаєте декоратор*
    
    // // // виведе в консоль "Chill out, you will get you result in 5 seconds"
    // // // ...через 5 секунд виведе результат роботи 'someFunction*'


    //         function someFunction(a, b) {
    //       console.log( a + b );
    //     }

    //     function logger(func) {

    //       function wrapper(...args) {    // оголошуємо функцію яка приймає аргументи масивом
    //         wrapper.logs.push(   // у користувацьку властивість ми пушимо
    //          {       
    //              args: args, // присвоюємо властовості 'args' масив args 
    //              timeStamp: new Date(), // додаємо поточний момент
    //          }
    //         );
    //         return func.apply(this, args); // повертаємо виклик базової функції з її аргументами
    //       }

    //       wrapper.logs = []; // оголошуємо свою властивість для функції і присвоюємо їй порожній масив

    //       return wrapper;
    //     }

    //     const loggedFunction = logger(someFunction);