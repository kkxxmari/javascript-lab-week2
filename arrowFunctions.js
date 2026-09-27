// Exercise 2(a)
const getModuleName = () => "Data Representation & Querying";

console.log(getModuleName());

// Exercise 2(b)
const showValue = value => value;

console.log(showValue("Learning arrow functions"));

// Exercise 2(c)
const findTotal = (firstNumber, secondNumber) => firstNumber + secondNumber;

console.log(findTotal(7, 13));

// Exercise 2(d)
const ages = [25, 31, 42, 77];

const doubledAges = ages.map(age => {
    if (age < 70) {
        return age * 2;
    }

    return age;
});

console.log(doubledAges);
