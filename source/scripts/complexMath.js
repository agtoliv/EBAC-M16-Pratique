// complexMath.js

// Função para multiplicação de matrizes de grandes dimensões
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    let result = new Array(rowsA);

    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}

// Função para calcular números complexos em forma polar
function multiplyComplex(a, b) {
    return {
        real: a.real * b.real - a.imag * b.imag,
        imag: a.real * b.imag + a.imag * b.real
    };
}

// Função de Transformada Rápida de Fourier (FFT)
function fft(inputArray) {
    const N = inputArray.length;
    if (N <= 1) return inputArray;

    const even = fft(inputArray.filter((_, i) => i % 2 === 0));
    const odd = fft(inputArray.filter((_, i) => i % 2 !== 0));

    const T = new Array(N / 2);
    for (let k = 0; k < N / 2; k++) {
        const exp = -2 * Math.PI * k / N;
        const twiddleFactor = { real: Math.cos(exp), imag: Math.sin(exp) };
        T[k] = multiplyComplex(twiddleFactor, odd[k]);
    }

    const combined = new Array(N);
    for (let k = 0; k < N / 2; k++) {
        combined[k] = {
            real: even[k].real + T[k].real,
            imag: even[k].imag + T[k].imag
        };
        combined[k + N / 2] = {
            real: even[k].real - T[k].real,
            imag: even[k].imag - T[k].imag
        };
    }
    return combined;
}

// Exportação das funções
module.exports = {
    multiplyMatrices,
    multiplyComplex,
    fft
};
