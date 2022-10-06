// Exercício 1

// const generateEmail = (nome) => {
//     return `${nome.toLowerCase().replace(' ', '_')}@trybe.com`
// }

// const createEmployee = (nome) => {
//     const employee = {
//         nomeCompleto: nome,
//         email: generateEmail(nome),
//     }
//     return employee;
// }




// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback('Pedro Guerra'),
//       id2: callback('Luiza Drumond'),
//       id3: callback('Carla Paiva'),
//     }
//     return employees;
//   };

// //// Exercício 2


const checkNumber = (myNumber, number) => myNumber === number;

const raffle = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    if (callback(myNumber, number)) {
        return 'Parabéns você ganhou'
    } {
        return 'Tente novamente'
    };
};

console.log(raffle(2, checkNumber));

