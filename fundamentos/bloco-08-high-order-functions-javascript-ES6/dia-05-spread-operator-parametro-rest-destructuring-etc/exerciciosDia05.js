
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
// //   firstName: 'Ivan',
// //   lastName: 'Ivanovich',
// //   nationality: 'Russian',
// // };

// // console.log(getNationality(otherPerson)); // Ivan is Russian
// // console.log(getNationality(person));

// // const getPosition = (latitude, longitude) => ({
// //     latitude,
// //     longitude});
  
// //   console.log(getPosition(-19.8157, -43.9542));

// // const greeting = (user = 'Usuário') => console.log(`Welcome ${user}!`);

// // greeting(); 

// // const multiply = (number, value = 1) => {
// //     return number * value
// //   };
  
// //   console.log(multiply(3));

// // Exercício 1

// // const rectangleArea = (width, height) => width * height;

// // const rectangle1 = [1, 2];
// // const rectangle2 = [3, 5];
// // const rectangle3 = [6, 9];
// // const rectangles = [rectangle1, rectangle2, rectangle3];

// // rectangles.forEach((rectangle) => {
// //   rectangleArea(...rectangle) 
// //   console.log(rectangle[0] * rectangle[1]);
// // // });

// // // Exercício 2

// // // const sum = (...numbers) => {
// // //     return numbers.reduce((acc, curr) => acc + curr,0)
// // // }

// // // console.log(sum(2,3,5,10))

// // // Exercício 3

// // const alex = {
// //     name: 'Alex',
// //     age: 26,
// //     likes: ['fly fishing'],
// //     nationality: 'Australian',
// //   };
  
// //   const gunnar = {
// //     name: 'Gunnar',
// //     age: 30,
// //     likes: ['hiking', 'scuba diving', 'taking pictures'],
// //     nationality: 'Icelandic',
// //   };
  
// //   // complete a assinatura da função abaixo
// //   const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  
// //   console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// //   console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// //   Exercício 4

// const people = [
//     {
//       name: 'Nicole',
//       bornIn: 1992,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Harry',
//       bornIn: 2008,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Toby',
//       bornIn: 1901,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Frida',
//       bornIn: 1960,
//       nationality: 'Dannish',
//     },
//     {
//       name: 'Fernando',
//       bornIn: 2001,
//       nationality: 'Brazilian',
//     },
//   ];

//   const filterPeople = (array) => array.filter(
//         ({nationality, bornIn, name}) => {
//             if (bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian') {
//             return name
//             }
//     })   

//   console.log(filterPeople(people));

// Exercício 5

// const myList = [1, 2, 3];

// const swap = ([a,b,c]) => [c,b,a]

// console.log(swap(myList));

// Exercício 6

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// const toObject = ([name, brand, year]) => {
//     const carObj = {
//         name,
//         brand,
//         year,
//     }
//     return carObj
// }

// console.log(toObject(shelbyCobra));

// Exercício 7

// const ships = [
//     {
//       name: 'Titanic',
//       length: 269.1,
//       measurementUnit: 'meters',
//     },
//     {
//       name: 'Queen Mary 2',
//       length: 1132,
//       measurementUnit: 'feet',
//     },
//     {
//       name: 'Yamato',
//       length: 256,
//       measurementUnit: 'meters',
//     },
//   ];
  
//   const shipLength = ({name, length, measurementUnit}) => {
//     return `${name} is ${length} ${measurementUnit} long`
//   }
  
//   console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
//   console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
//   console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// Exercício 8

// const greet = (name, greeting = 'Hi') => {
//     return `${greeting}, ${name}`
// }

// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

