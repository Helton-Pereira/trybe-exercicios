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

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   function flatten(array) {
//     return array.reduce((acc, element) => acc.concat(element))
//   }

//   console.log(flatten(arrays));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  //  Exercício 2
  
//   const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames(array) {
//   return array.reduce((acc, curr) => {
//    return `${acc + curr.author.name}, `
//   }, '')
// }
// console.log(reduceNames(books));

// Exercício 3

const expectedResult = 43;

function averageAge(array) {
    const authorsNumber = array.length;
    const totalAge = array.reduce((acc, curr) => {
      return acc + (curr.releaseYear - curr.author.birthYear)
  }, 0)
  return totalAge / authorsNumber
}

console.log(averageAge(books));

