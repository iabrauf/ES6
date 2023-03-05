//higher order functions

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop

// for(let i =0 ; i < companies.length; i++){
//     console.log(companies[i]);
// }
// forEach

// companies.forEach(function(company){
//     console.log(company);
// })


// Get 21 and older
// for
// const canDrink =[];
// for(let i =0 ; i < ages.length; i++){
//     if(ages[i] > 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// filter

// const canDrink = ages.filter(function(age){
//     if(age > 21) return true;
// })

// console.log(canDrink);
//using arrow function

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);
// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });
// console.log(retailCompanies);
// const retailCompanies = companies.filter(company => company.category ==='Retail');
// console.log(retailCompanies);



//Get 80s company
// const EightysCompany =  companies.filter(company => (company.start >= 1980 && company.start < 1990) );
// console.log(EightysCompany);

//companies that last for 10 year or more
// const lastForTenYear = companies.filter(company => (company.end - company.start) >= 10);
// console.log(lastForTenYear);


// map

// Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });
// console.log(companyNames);

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

//first squre root than multiplied by 2
// const ageMap = ages
//   .map(age => Math.sqrt(age))
//   .map(age => age * 2);
//   console.log(ageMap);


// sort

// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

//how compare function works

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.



// Sort companies by start year

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {  //1981 and 1992 return -1 negative 1981(a) is sorted
                                //1992 and 1989 return 1 positive 19889(b) is sorted
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Sort ages
// const sortAges = ages.sort((a, b) => a - b); //lower to higher
// const sortAges = ages.sort((a, b) => b - a); //higher to lower
// console.log(sortAges);


// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;  
// }, 0);    //first parameter is 0. setting by default


// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total,company) => total + (company.end - company.start),0)

// console.log(totalYears);

// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a,b) => a - b , 0)
  .reduce((a,b) => a + b ,0);


console.log(combined);