// const numbers = [50, 85, -30, 3, 15];

// const getBiggerNumber = (array) => {
//     let biggerNumber = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         (biggerNumber < array[i] ? biggerNumber = array[i] : array[i])
//     }
//     return biggerNumber
// }

// const getBiggerNumber = (result, number) => {
//     return (result > number) ? result : number;
// }

// const bigger = numbers.reduce((acc,number) => {
//     return (acc > number) ? acc : number
// });

// console.log(bigger);

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPairs = (acc, number) => (number % 2 === 0) ? acc + number : acc;

// const result = numbers.reduce(sumPairs);

// console.log(result);

// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: 59 },
//         { name: 'Português', nota: 80 },
//         { name: 'Química', nota: 78 },
//         { name: 'Biologia', nota: 92 },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 76 },
//         { name: 'Português', nota: 90 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 80 },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 91 },
//         { name: 'Português', nota: 85 },
//         { name: 'Química', nota: 92 },
//         { name: 'Biologia', nota: 90 },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 70 },
//         { name: 'Português', nota: 70 },
//         { name: 'Química', nota: 60 },
//         { name: 'Biologia', nota: 50 },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 80 },
//         { name: 'Português', nota: 82 },
//         { name: 'Química', nota: 79 },
//         { name: 'Biologia', nota: 75 },
//       ],
//     },
//   ];

//   const getBestGrade = (acc, estudante) => { 
//     return (acc.nota > estudante.nota) ? acc : estudante;
//   }

//   const report = (array) => array.map((aluno) => ({
//     name: aluno.nome,
//     materia: aluno.materias.reduce(getBestGrade).name
//   }))

//   console.log(report(estudantes));


//   Exercício 1

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    return array.reduce((acc, element) => acc.concat(element))
  }

  console.log(flatten(arrays));