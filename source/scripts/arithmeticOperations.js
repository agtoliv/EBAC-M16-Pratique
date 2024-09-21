// arithmeticOperations.js

const { multiplyMatrices, fft } = require('./complexMath');

// Função para gerar uma matriz aleatória de grandes dimensões
function generateRandomMatrix(rows, cols) {
    let matrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0).map(() => Math.floor(Math.random() * 100));
    }
    return matrix;
}

// Função para criar uma matriz de números complexos
function generateComplexSignal(length) {
    let signal = new Array(length);
    for (let i = 0; i < length; i++) {
        signal[i] = { real: Math.random() * 10, imag: Math.random() * 10 };
    }
    return signal;
}

// Multiplicação de duas matrizes muito grandes (potencialmente intensiva em CPU)
function largeMatrixMultiplication() {
    const matrixA = generateRandomMatrix(500, 500); // Matrizes de grandes dimensões
    const matrixB = generateRandomMatrix(500, 500);
    console.log('Multiplicando matrizes...');
    const result = multiplyMatrices(matrixA, matrixB);
    console.log('Resultado da multiplicação de matrizes: ', result);
}

// Aplicação de Transformada Rápida de Fourier em um sinal complexo
function performFFTOnLargeSignal() {
    const complexSignal = generateComplexSignal(1024); // Sinal com 1024 elementos complexos
    console.log('Aplicando FFT...');
    const transformedSignal = fft(complexSignal);
    console.log('Sinal transformado: ', transformedSignal);
}

// Exportação das funções
module.exports = {
    largeMatrixMultiplication,
    performFFTOnLargeSignal
};

// Executar as funções
largeMatrixMultiplication(); // Isso pode causar lentidão
performFFTOnLargeSignal();  // Transformada FFT pode ser complexa para grandes sinais
