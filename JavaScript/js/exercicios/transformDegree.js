/*
    Celsius em Fahrenheit

    Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra.

    C = (F -32) * 5/9
    F = C * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não encontrado!')
    }

    // Fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    // fluxo alternativo C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''))
        formula = (celsius) => celsius * 9 / 5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50c'))
} catch (error) {
    console.log(error.message)
} 