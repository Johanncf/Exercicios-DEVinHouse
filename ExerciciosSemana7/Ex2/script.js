const numeros = [ 3, 5, 7, 9, 11, 13 ]

const numerosMultiplicados = numeros.map((numero, index) => {
    if(index === 0) {
        return numero
    }

    return numero * numeros[index - 1]
})

console.log(numeros, numerosMultiplicados)