let multiply = (x, y) => {
    console.log(x * y);
}

let multiply_New = (x) => {
    return (y) => {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiply_New_ByThree = multiply_New(3);
multiply_New_ByThree(5);

export default { multiply, multiply_New };