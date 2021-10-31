// Ejercicios resueltos sobre el libro de js

// Ejercicio FizzBuzz

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    console.log("FizzBuzz");
  }
  if (i % 3 === 0) {
    console.log(i);
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log(i);
    console.log("Buzz");
  }
}
