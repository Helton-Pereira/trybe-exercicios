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

//   function formatedBookNames(array) {
//     return array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)
//   }

//   console.log(formatedBookNames(books));

// Exercício 2

// function nameAndAge(array) {
//     return array.map((book) => ({author: book.author.name, age: book.releaseYear - book.author.birthYear})).sort((authorA , authorB) => authorA.age - authorB.age)
// } 
//   console.log(nameAndAge(books));

//   Exercício 3

// function fantasyOrScienceFiction(array) {
//     return array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
//   }

//   console.log(fantasyOrScienceFiction(books));

// Exercício 4

// function oldBooksOrdered(array) {
//     return array.filter((book) => book.releaseYear < 1962).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
//   }

//   console.log(oldBooksOrdered(books));

// Exercício 5

// function fantasyOrScienceFictionAuthors(array) {
//     return array.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((name) => name.author.name).sort();
//   };

//   console.log(fantasyOrScienceFictionAuthors(books));