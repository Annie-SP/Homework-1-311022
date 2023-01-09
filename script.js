`use strict`;


// Реалізуйте наступну систему, схожу до розглянутої на вебінарі:

// 1) чотири класи для створення об'єктів-сутностей (це можуть бути тварини, покемони, раси і т.д. - проявіть фантазію)
// 2) у кожного класу має бути мінімум 3 властивості та мінімум 3 методи(але можна й більше)
// 3) у кожного класу має бути своя унікальна властивість
// 4) у кожного класу має бути приватна властивість
// 5) у двох класів має бути спільний предок та спільний метод характерний тільки для них
// 6) у всіх чотирьох класів має бути один (крім проміжних) клас-предок


class Lego{
	#yearOfRelise
	constructor(model, yearOfRelise){
		this.model = model
		this.#yearOfRelise = yearOfRelise
	}
	modelNumber = () => console.log(`Model number ${this.model}` )
	reliseYear = () => console.log(`Relise year of Lego is ${this.#yearOfRelise}`)
}

class legoGender extends Lego{
	constructor(gender, model, yearOfRelise){
		super(model, yearOfRelise)
		this.gender = gender
	}
	genderFor = () => console.log(`This type of lego is only for ${this.gender}`)	
}

class legoClassic extends Lego{	
	constructor( age, details, model, yearOfRelise){
		super(model, yearOfRelise)
		this.category = "Lego Classic"
		this.age = age
		this.details = details
		
	}
	allInform = () => console.log(`The category ${this.category} are for children from ${this.age} years`)
	countDet = () => console.log(`The model ${this.model} of ${this.category} have ${this.details} details`)
	themeOfLego = () => console.log(`This type of ${this.category} spans so many different age groups, there’s fun for all the family and imagination for every generation. `)
}


class legoFriends extends legoGender{
	constructor(age, details, model, yearOfRelise, gender){
		super(model,yearOfRelise, gender)
		this.category = "Lego Friends"
		this.age = age
		this.details = details
		
	}
	allInform = () => console.log(`The category ${this.category} are for children from ${this.age} years`)
	countDet = () => console.log(`The model ${this.model} of ${this.category} have ${this.details} details`)
	themeOfLego = () => console.log(`This type of ${this.category} allows kids tell their own stories, work on interpersonal skills and play out real-life scenarios that celebrate friendship.`)

}

class legoCity extends legoGender{
	constructor( age, details,  model, yearOfRelise, gender){
		super(model,yearOfRelise, gender)
		this.category = "Lego City"
		this.age = age
		this.details = details
		
	}
	allInform = () => console.log(`The category ${this.category} are for children from ${this.age} years`)
	countDet = () => console.log(`The ${this.model} of ${this.category} have ${this.details} details`)
	themeOfLego = () => console.log(`This type of ${this.category} allows to connect and style your own personal City.`);

}

class legoDuplo extends Lego{
	constructor(age, details, model, yearOfRelise){
		super(model, yearOfRelise)
		this.category = "Lego Duplo"
		this.age = age
		this.details = details
		
	}
	allInform = () => console.log(`The category ${this.category} are for children from ${this.age} years`)
	countDet = () => console.log(`The ${this.model} of ${this.category} have ${this.details} details`)
	themeOfLego = () => console.log(`This type of ${this.category} building blocks unleash little ones creativity through developmental learning.`);

}


const legoClassic1 = new legoClassic("4-6", 399, 10111 , 2020);
console.log(legoClassic1);
const legoFriends1 = new legoFriends("4-8", 399, "boys", 10111, 2022);
const legoCity1 = new legoCity('4-8', 378,'boys', 110712, 2021);
legoFriends1.countDet();
legoClassic1.reliseYear();
console.log(legoCity1.details);
console.log(legoFriends1.#reliseYear);
