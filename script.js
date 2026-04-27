"use strict";

import { greet, add, multiply, sumAll, average } from "./utils.js";
import { user, numbers, skills } from "./data.js";

console.log("Модульний код підключено!");

// Деструктуризація
const { name, age, city, profession } = user;

// Шаблонні рядки
const userInfo = `Користувач: ${name}, Вік: ${age}, Місто: ${city}, Професія: ${profession}`;

// Spread
const newSkills = [...skills, "Git", "API"];

// Rest використано у функціях sumAll(...numbers) та average(...numbers)
const total = sumAll(...numbers);
const avg = average(...numbers);

// Enhanced object literal
const result = {
    name,
    age,
    city,
    profession,
    skills: newSkills,
    total,
    avg
};

console.log(greet(name));
console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));
console.log(userInfo);
console.log("Новий масив навичок:", newSkills);
console.log("Результат:", result);

const app = document.getElementById("app");

app.innerHTML = `
    <div class="card">
        <h3>Дані користувача</h3>
        <p>${greet(name)}</p>
        <p>${userInfo}</p>
    </div>

    <div class="card">
        <h3>Математичні операції</h3>
        <p>10 + 5 = ${add(10, 5)}</p>
        <p>10 * 5 = ${multiply(10, 5)}</p>
        <p>Сума чисел: ${total}</p>
        <p>Середнє значення: ${avg}</p>
    </div>

    <div class="card">
        <h3>Навички</h3>
        <p>${newSkills.join(", ")}</p>
    </div>
`;
