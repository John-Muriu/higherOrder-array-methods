const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004,
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008,
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007,
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010,
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014,
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010,
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996,
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016,
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989,
    },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);

// }
//forEAch
// companies.forEach(company => console.log(company));

//filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++)
//     if (ages[i] >= 40) {

//         canDrink.push(ages[i]);
//     }
const canDrink = ages.filter((ages) => ages >= 10);
console.log(canDrink);

// filter retail companies

const retailComp = companies.filter((company) => company.category === "Retail");
console.log(retailComp);

//get 80 company
const eightCom = companies.filter(
    (company) => company.start >= 1980 && company.start < 1990
);
console.log(eightCom);

//company that lasted 10 years

const lastedTenYears = companies.filter(
    (company) => company.end - company.start > 10
);
console.log(lastedTenYears);

//filter finance companies
const financeComp = companies.filter(
    (company) => company.category === "Finance"
);
console.log(financeComp);
//filter technology company
const techCompany = companies.filter(
    (company) => company.category === "Technology"
);
console.log(techCompany);

//sort
//create an array of names
const companyNames = companies.map((company) => `${company.name} [${company.end - company.start}]`);
console.log(companyNames);

//create an array of  company years
const compaYear = companies.map(company => company.end - company.start);
console.log(compaYear);

//create an array of company names
const companyName = companies.map(company => company.name);
console.log(companyName);

//create an array when the company closd doors
let companyEnd = companies.map(company => `${company.name} [${company.end}]`);
console.log(companyEnd);

//create a test map for .math properties
const agesSquare = ages
    // .map(age => Math.sqrt(age))
    .map(age => age * 3);
console.log(agesSquare);

//createan array to add 2 to the ages
const agesAdd = ages
    .map(age => age / 2);
console.log(agesAdd);

//.sort companies
const sortComp = companies.sort((a, b) => (a.start > b.end));
console.log(sortComp);
// sort company
const sortCompany = companies.sort();

console.log(sortCompany);

//sort ages in ascending order
const sortAges = ages.sort((a, b) => (a - b));
console.log(sortAges);
// sorting ages in descending order 
const sortAgesDes = ages.sort((a, b) => (b - a));
console.log(sortAgesDes);

//reduce adding the total number of ages
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);
// total ages using the reduce method
const ageSum = ages.reduce((total, age) => (total + age), 0);
console.log(ageSum);