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

console.log(groupUsersByProfession(people));
