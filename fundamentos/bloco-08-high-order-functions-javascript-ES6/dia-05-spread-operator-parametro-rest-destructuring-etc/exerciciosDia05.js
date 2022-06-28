
// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
// //   };


// // let comida = 'gato';
// // let animal = 'água';
// // let bebida = 'arroz';

// // // console.log(comida, animal, bebida); // arroz gato água

// // // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// // [comida, animal, bebida] = [bebida, comida, animal];
// // console.log(comida, animal, bebida);

// // let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// // console.log(numerosPares); // [6, 8, 10, 12];

// // // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// // [,,, ...numerosPares] = numerosPares;

// // console.log(numerosPares); // [6, 8, 10, 12];

// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
//   };
  
//   const { nationality = 'Brazilian'} = person;

//   console.log(person)

//   const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude});
  
//   console.log(getPosition(-19.8157, -43.9542));

// const greeting = (user = 'Usuário') => console.log(`Welcome ${user}!`);

// greeting(); 

// const multiply = (number, value = 1) => {
//     return number * value
//   };
  
//   console.log(multiply(3));

// Exercício 1

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangle) 
//   console.log(rectangle[0] * rectangle[1]);
// });

// Exercício 2

const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr)
}

console.log(sum(2,3,5,10))

