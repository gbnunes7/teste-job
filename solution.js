// 1
function temEmFibonacci(n) {
    function fibSequence(nMax) {
        const array = [];
        let a = 0, b = 1;

        while (a <= nMax) {
            array.push(a);
            [a, b] = [b, a + b];
        }
    
        return array;
    }
    const array = fibSequence(n);

    return array.includes(n);
}

// 2
function hasA(string) {
    let contador;
    string = string.toLowerCase().split('')
    for(let i = 0; i <= string.length ; i ++) {
        if(string[i] === 'a') {
            contador++
        }
    }
    return [contador> 0, contador]
}

// 3
function kValue () {
    let i = 12
    let soma = 0
    let k = 1

    while (k < i) {
        k = k + 1;
        soma = soma + k;
    }

    return soma
}

console.log(kValue()) // resposta 77

//4 

function descobrirNesimoTermo(nTermo, valorPrimeiroTermo) {
    const razao = 2
    return valorPrimeiroTermo +(nTermo - 1) * razao
}

console.log(descobrirNesimoTermo(5,1)) // a

function descobrirNesimoTermoPg(nTermo,valorPrimeiroTermo) {
    const razao = 2
    const pow = nTermo - 1
    return valorPrimeiroTermo * Math.pow(razao,pow) 
}

console.log(descobrirNesimoTermoPg(7,2)) // b

function descobrirNesimoTermoQuadradosNaturais (termo) {
    return Math.pow(termo,2)
}

console.log(descobrirNesimoTermoQuadradosNaturais(7)) // c

function descobrirNesimoTermoQuadradosPerfeitos (termoAnterior) {
    const quadradoAnterior = Math.sqrt(termoAnterior)
    const valorTermo =  quadradoAnterior+2

    return Math.pow(valorTermo,2)
}
console.log (descobrirNesimoTermoQuadradosPerfeitos (64) ) // d

function fibonacci (n) {
    if (n == 1) return 1
    if (n == 0) return 0

    return fibonacci(n -1) + fibonacci ( n -2)
}

console.log(fibonacci(7)) // e

//5
function testarInterruptores() {
    let sala1 = false;
    let sala2 = false;
    let sala3 = false;

    let int1 = false;
    let int2 = false;
    let int3 = false;

    function atualizarSalas() {
        sala1 = int1;
        sala2 = int2;
        sala3 = int3;
    }
    while (!(sala1 || sala2 || sala3)) {
        atualizarSalas();

        if (!int1) {
            int1 = true;
        } else if (!int2) {
            int2 = true;
        } else if (!int3) {
            int3 = true;
        } else {
             int1 = false;
            int2 = false;
            int3 = false;
        }
    }

    return {
        interruptores: { int1, int2, int3 },
        salas: { sala1, sala2, sala3 }
    };
}

