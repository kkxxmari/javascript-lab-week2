// this one just gives back the module name
const moduleTitle = () => "Data Representation & Querying";

console.log(moduleTitle());

// whatever I put in here comes back unchanged
const keepSameValue = item => item;

console.log(keepSameValue("Trying out arrow functions"));

// adding two numbers together
const calculateSum = (a, b) => a + b;

const result = calculateSum(8, 12);
console.log("The total is " + result);

// change the ages below 70 and leave the last one alone
const ages = [25, 31, 42, 77];

const changedAges = ages.map(currentAge =>
    currentAge < 70 ? currentAge * 2 : currentAge
);

console.log(changedAges);
