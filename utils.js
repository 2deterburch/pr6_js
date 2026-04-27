"use strict";

export function greet(name = "Гість") {
    return `Привіт, ${name}!`;
}

export const add = function(a = 0, b = 0) {
    return a + b;
};

export const multiply = (a = 1, b = 1) => a * b;

export function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function average(...numbers) {
    if (numbers.length === 0) return 0;

    return sumAll(...numbers) / numbers.length;
}
