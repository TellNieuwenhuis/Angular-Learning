// let message = 'abc';
// message.endsWith('c'); // true

let message; //!since message is not defined it is set as an any type
message = 'abc';
let endsWithC = (<string>message).endsWith('c'); // *endsWith only works on strings so need to insert the string.
let alternativeWay = (message as string).endsWith('c'); // *alternative way of doing the same thing.