import { people } from "../data/people.js";

// const EngineersWithGivenAge = (people) => {
//     if(!people || people.length === 0 || !Array.isArray(people)) {
//         return "invalid input";
//     }

//     let result = [];
//     for(let person of people) {
//         if(person.profession === "Engineer" && person.age > 30) {
//             result.push(person);
//         }
//     }
//     return result;
// }

// const EngineersWithGivenAge = (people) => {
//     if(!people || people.length === 0 || !Array.isArray(people))
//         return "invalid input";

//     return people
//                  .filter((person) => person.profession === "Engineer" && person.age > 30)
// }
// console.log(EngineersWithGivenAge(people));

//Group Users based on profession
// const groupUsersByProfession = (people) => {

//     return people.reduce((acc, person) => {
//            let profession = person.profession;
//            if(!acc[profession]) {
//             acc[profession] = [];
//            }

//            acc[profession].push(person.name);
//            return acc;
//     }, {});
// }

const groupUsersByProfession = (people) => {

    let output = {};
    for(let person of people) {
        let profession = person.profession;
        if(!output[profession]) {
            output[profession] = [];
        }
        output[profession].push(person.name);
    }
    return output;
}

// console.log(groupUsersByProfession(people));

//Average salary per profession
// const averageSalaryPerProfession = (people) => {

//     let output = {};
//     for(let person of people) {
//         let profession = person.profession;
//         let salary = person.salary;
//         if(!output[profession]) {
//             output[profession] = {totalSalary: 0, count : 0};
//         }
//         output[profession].totalSalary += salary;
//         output[profession].count += 1;
//     }
    
//     let result = {};
//     for(let profession in output) {
//         let totalSalary = output[profession].totalSalary;
//         let count = output[profession].count;
//          result[profession] = {
//             averageSalary : Math.round((totalSalary/count) * 100) /100
//          }
//     }
//     return result;
// }

const averageSalaryPerProfession = (people) => {
   
    let output = people.reduce((acc, person) => {
        let profession = person.profession;
        let salary = person.salary;
      if(!acc[profession]) {
            acc[profession] = {totalSalary: 0, count : 0 }
      }
        acc[profession].totalSalary += salary;
         acc[profession].count += 1;
         return acc;

    }, {});

    return Object.entries(output)
                                .map(([ profession, salaryObject]) => {
                                        return {
                                            [profession]: {
                                                averageSalary: Math.round((salaryObject.totalSalary/salaryObject.count) * 100) / 100
                                            }
                                        }
                                              });
                    
}
console.log(averageSalaryPerProfession(people));

//youngest and oldest person per profession

const youngestAndOldestPerson = (people) => {

      
    return people.reduce((acc, person) => {
        let name = person.name;
        let age = person.age;
        let profession = person.profession;
         if(!acc[profession]) {
            acc[profession] = {
                youngestPerson: {
                    name: name,
                    age: age
                }, 
                oldestPerson : {
                    name : name,
                    age : age
                }
            }
         }
         let professionObject = acc[profession];
         let youngest = professionObject.youngestPerson;
         let oldest = professionObject.oldestPerson;
         
         if(age < youngest.age) {
            youngest.name = name;
            youngest.age = age;
         }

         if(age > oldest.age) {
            oldest.name = name;
            oldest.age = age;
         }
       
         return acc;
    }, {});
}

console.log(youngestAndOldestPerson(people));