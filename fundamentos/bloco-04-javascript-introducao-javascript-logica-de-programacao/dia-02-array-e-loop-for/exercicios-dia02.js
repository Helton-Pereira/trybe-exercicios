let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 1
// console.log(numbers);


// exercicio 2
let soma = 0;

for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index]   
}
// console.log(soma)


// exercicio 3
// console.log(soma / numbers.length)


// exercicio 4
if (soma / numbers.length > 20) {
    // console.log('valor maior que 20')
} else {
    // console.log('valor menor ou igual a 20')
}


// exercicio 5

let maiorValor = 0;

for (let index2 = 0; index2 < numbers.length; index2+=1) {
    if (numbers[index2] > maiorValor) {
        maiorValor = numbers[index2]
    }
}
// console.log(maiorValor)


// exercicio 6

let impar = 0;

for (let index3 = 0; index3 < numbers.length; index3+=1) {
    if (numbers[index3] % 2 != 0) {
        impar += 1;
     }
    
}

// console.log(impar)


// exercicio 7
// pesquisar array[0]

let menorNumero = numbers[0]

for (let index4 = 0; index4 < numbers.length; index4+=1) {
    if (numbers[index4] < menorNumero) {
        menorNumero = numbers[index4];
    }
    
}
// console.log(menorNumero);


// exercicio 8



