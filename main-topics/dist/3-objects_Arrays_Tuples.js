"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectsArraysTuples = () => {
    //1.OBJECTS
    const person = {
        name: "kevin",
        age: 25,
        hobbies: ["swimming", "reading", "coding"],
        role: ["trainer", "Technical Blogger"],
    };
    // defining the object type
    let car;
    //initializing the object
    car = {
        make: "Tesla",
        model: "Model S",
        year: 2020,
        chargeVoltage: 220
    };
    // console.log(`I own a ${car.year} ${car.make} ${car.model} and it charges at ${car.chargeVoltage} volts`);
    //2.Arrays
    let colors;
    colors = ["red", "green", "blue"];
    let EvenNumbers = [2, 4, 6, 8];
    let truths = [true, false, true, true, false];
    // list even numbers
    // EvenNumbers.forEach((num) => {
    //     console.log(num);
    // });
    // colors.push("yellow");
    // colors.shift()
    // console.log(colors.length);
    // console.log(colors)
    //readonly arrays
    let estateIOwn = ["house", "car", "land", "boat"];
    // estateIOwn.push("yatch") // error;
    // 3.Tuples : fixed length & types arrays
    /*
    1. length
    2.types
    */
    // let mycar = [2002, "Toyota", "Corolla"];
    // const [year, make, model] = mycar;
    // let myCar: [number,string,string];
    // myCar = [2002, "Toyota", "Corolla"];
    //readonly tuples
    let myCar = [2002, "Toyota", "Corolla"];
    // myCar.push("yatch") // error;
    console.log(myCar);
};
exports.default = objectsArraysTuples;
