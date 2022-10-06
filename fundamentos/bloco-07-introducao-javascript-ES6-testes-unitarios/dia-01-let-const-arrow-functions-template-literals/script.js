// Parte 1

// Exercício 1

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//       console.log(elseScope);
//     }
    
//   }

//   testingScope(false);

// Exercício 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const ordenar = (array) => {
//     const sortArrays = array.sort((a, b) => a - b);
//     return sortArrays
// }
// const sortedArray = ordenar(oddsAndEvens);

// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte 2

// Exercício 1

// const fatorial = (num) => {
//     let resultado = 1;

//     for (i = 1; i <= num; i += 1) {
//         resultado *= i;
//     }
//     return resultado
// }

// console.log(fatorial(4));

// Exercício 2

const longestWord = (frase) => {
    const string = frase.split(' ');
    let longest = 0;
    let word;
    for (let i = 0; i < string.length; i+= 1) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word
}



console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))