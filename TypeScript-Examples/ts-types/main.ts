let a; // *if left as "let a;" it will be an any and the variable can be set to any type in multiple places. 
a = 1;
a = true;
a = 'a';
// * list of posibilites. 
let b: number;
let c: boolean;
let d: string;
let e: number[];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2}; //!this takes the const and puts them in a list that can be use for varius purposes like let backGroundColor = Color.Red;
                                            //* the number value assinged to each one is not required but it is recomended incase another value is added to the enum.
let backGroundColor = Color.Red;