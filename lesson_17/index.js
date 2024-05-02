class Animal {
    constructor(age, name, color) {
        this.age = age
        this.name = name
        this.color = color
    }
    info() {
        console.log(`Меня зовут ${this.name}. Я цвета: ${this.color}`)
        return 'ну вот и все, ребята!'
    }
}

class Panda extends Animal {
    constructor(age, name, color, weight) {
        // super отвечает за наследование от конструктора родителя
        super(age, name, color)
        this.weight = weight
    }
    sleep() {
        console.log('Z-z-z-z-z')
    }
    eat() {
        this.weight += 1
    }
}

class Alcohol {
    constructor(title, strength, volume) {
        this.title = title;
        this.strength = strength;
        this.volume = volume;
    }

    drink() {
        console.log(`Приятно выпить ${this.title}.`);
        return "Отличный напиток!";
    }

    reduce() {
        this.strength -= 5
    }
}

class Cognac extends Alcohol {
    constructor(title, strength, volume, age, country) {
        super(title, strength, volume);
        this.age = age;
        this.country = country;
    }
}

class Martini extends Alcohol {
    constructor(title, strength, volume, sugarAmount) {
        super(title, strength, volume);
        this.sugarAmount = sugarAmount;
    }
}

const asti = new Martini("Asti", 15, 750, "Dry");
const cognac = new Cognac("Vsop", 41, 500, "12")





