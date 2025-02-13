"use strict";
// 1. Never : The never type represents the type of values that never occur.
//  For example, a function that throws an error or one that never returns.
Object.defineProperty(exports, "__esModule", { value: true });
exports.voidType = exports.specialTypes = void 0;
const specialTypes = () => {
    throw new Error('This is an error');
};
exports.specialTypes = specialTypes;
// 2.Any: Ts has special types that may not refer to any specific type of data
// Its criminal to use any in your code😐
// let age: any = "23";
// console.log(`Type of age: ${typeof age}`);
// console.log(`Value of age: ${age}`);
//3. null & undefined: In Ts, both null and undefined have their own types named null and undefined respectively.
// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
//4. Void : The void type is used when a function does not return a value
const voidType = () => {
    console.log("first line");
};
exports.voidType = voidType;
