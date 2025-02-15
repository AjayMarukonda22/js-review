

import organisation from "../data/organisation.json" with {type: "json"};


const employeesWorkingOnProjectsGreaterThenAmount = (organisations) => {
        
    let result = new Set();
    for(let key in organisations) {
        let organisation = organisations[key];
        let divisions = organisation.divisions;

        for(let division of divisions) {
            let departments = division.departments;

            for(let department of departments) {
                let employees = department.employees;

                for(let employee  of employees) {
                    let projects = employee.projects;

                    for(let project of projects) {
                       if(project.budget > 150000) {
                        result.add(employee.name);
                       }
                    }
                }
            }
        }
    }
    return result;
}
console.log(employeesWorkingOnProjectsGreaterThenAmount(organisation));
