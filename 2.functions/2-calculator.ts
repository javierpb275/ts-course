let subtract: (a:number, b:number) => number = function(a:number, b:number): number {
    let result = a - b;
    console.log(`${a} - ${b} = ${result}`);
    return result;
}

subtract(2,1);

//---------------------------------------------

let multiply: (a:number, b:number) => number;

multiply = (a, b) => a*b;

console.log(multiply(5, 5));

//-----------------------------------------

let multiply2: (a:number, b:number, callback: (r: number) => void) => void;

multiply2 = (a, b, callback) => callback(a*b); 

multiply2(4, 5, result => console.log(`RESULT: ${result}`));