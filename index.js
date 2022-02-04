const messageDecoder = require("./decoder");

const input1 = [
    "Hey good lawyer",
    "as I previously previewed",
    "yam does a soup",
];

const input2 = [
    "First I give money to Teresa",
    "after I inform dad of",
    "your horrible soup",
];

console.log("Message1: ", messageDecoder(input1));
console.log("Message1: ", messageDecoder(input2));
