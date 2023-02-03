// function resource(x) {
//     do {
//         console.log(x);
//         x--;
//     } while (x > 0);
// }

// resource(10);

// const getMaxCallStackSize = (i) => {
//     try {
//         return getMaxCallStackSize(++i);
//     } catch {
//         return i;
//     }
// }

// console.log(getMaxCallStackSize(0));

// const factorial = (n) => {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(10));

// const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n -2));
// console.log(fibonacci(4));

// function myFunction() {
//     console.log(this);
// }

// myFunction();

// function Car(color) {
//     this.color = color;
// }

// const redCar = new Car('red');
// console.log(redCar.color);

// function myFunction() {
//     console.log(arguments);
// }

// myFunction('a', 'b');

// const increment = (num) => num + 1;
// console.log(increment(42));

// class Hero {
//     constructor(heroName) {
//         this.heroName = heroName;
//     }
//     logName() {
//         console.log(this.heroName);
//     }
// }

// const batman = new Hero('Batman');
// batman.logName();

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(4));