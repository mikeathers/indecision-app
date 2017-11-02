const square = function(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;
console.log(squareArrow(8));

const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
} 
const getFirstNameExp = (fullName) => fullName.split(" ")[0];


console.log(getFirstNameExp("Mike Atherton"));
console.log(getFirstName("Dave Smith"));
