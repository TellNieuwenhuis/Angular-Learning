// string, number, boolean, null, undefined are all supported
let myName: string | null = null;
myName = 'test';

// Arrays
let items = [5, 'luis'];

// Objects
const account:{
    name: string,
    balance: number,
    status?: string
} = {
    name: 'luis',
    balance: 10
};

let accounts: {}[]; // tells the variable to store an array of objects