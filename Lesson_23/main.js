// String
// length - return a string length
// str[str.length - 1];
// str.at(i) = return some symbol at position 'i' ex. str.at(-1);
// str.split('') = divide string
// str.toLowerCase and str.toUpperCase
// str.includes('') = check if string includes a substring
// str.indexOf('') / str.lastIndexOf('') = index of the substring
// str.replace('.com', 'www') / str.replaceAll('.com', 'www') = to replace a substring
// str.trim() = removes additional blank spaces
// str.slice(8, 12); = to 'cut' characters from index 8 to index 12

// transform string into Number
// '+'
// Number()
// parseInt()

// --------------------------------------------------------------------------------------------- //

const str = "my string";
// Letters are encoded in UTF and has indexes
// "my string 1" > "my string 2"; = false
// "a" > "A"; = true
// "a" > "b"; = false

// In case of math calculations, transform strings into numbers
// Number(squareSide), +squareSide, parseInt(squareSide)

// To check with other than parseIn you can check with typeOf. NaN (is a number)
// isNan(squareSide)

// --------------------------------------------------------------------------------------------- //

// transform string into Bolean
// Boolean('some string')

const anotherStr = "some string";

// const myNumber = 1_100_000_000;
// const myNumber = 1e9;

// This % could help you in the chocolate bar case. Ex. 10 % 3 . Can divide 9 by 3 and then the rest is 1

// const year = 2024;
// if(year % 4 === 0 || year % 100 === 0){
//     console.log("It's a leap year");
// }
