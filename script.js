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