// string, number, boolean, null, undefined are all supported
let myName: string | null = null;
myName = 'test';

interface IAccount{
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void //? makes the function optional
};

// Arrays
let items = [5, 'luis'];

// Objects
const account: IAccount = {
    name: 'luis',
    balance: 10
};

let accounts: IAccount[]; // tells the variable to store an array of objects