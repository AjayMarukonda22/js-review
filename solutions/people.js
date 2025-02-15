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

const EngineersWithGivenAge = (people) => {
    if(!people || people.length === 0 || !Array.isArray(people))
        return "invalid input";

    return people
                 .filter((person) => person.profession === "Engineer" && person.age > 30)
}
console.log(EngineersWithGivenAge(people));

//Group Users based on profession

