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
  
  // Adicione o código do exercício aqui:
//   Exercício 1

// function authorBornIn1947(array) {
//     return array.find((element) => element.author.birthYear === 1947).author.name
//   }

//   Exercício 2
// solução tosca
// function smallerName(array) {
//     let nameBook;
//     array.forEach((element) => {
//         if (!nameBook || element.name.length < nameBook.length) {
//             nameBook = element.name
//         }
//     });
  
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
//   }

//   console.log(smallerName(books));

// //   solução elegante

// function smallerName(array) {
//     let nameBook;
//     array.forEach((element) => {
//         if (!nameBook || element.name.length < nameBook.length) {
//             nameBook = element.name
//         }
//     });
  
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
//   }

// Exercício 3

// function getNamedBook(array) {
//     return array.find((book) => book.name.length === 26)
//   }

//   console.log(getNamedBook(books));

// Exercício 4

// function booksOrderedByReleaseYearDesc(array) {
//     return array.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
//   }
  
//   console.log(booksOrderedByReleaseYearDesc(books));

// Exercício 5


// function everyoneWasBornOnSecXX(array) {
//   return array.every((book) => book.author.birthYear >= 1901)
// }

// console.log(everyoneWasBornOnSecXX(books));

// Exercício 6

// function someBookWasReleaseOnThe80s(array) {
//     return array.some((book) => book.releaseYear >= 1981 && book.releaseYear <= 1990)
//   }

//   console.log(someBookWasReleaseOnThe80s(books));
  
// Exercício 7

function authorUnique(array) {
    return array.every((book => 
        !array.some((booksSome) =>
        (booksSome.author.birthYear === book.author.birthYear) && (booksSome.author.name !== book.author.name))));
  }

  console.log(authorUnique(books));