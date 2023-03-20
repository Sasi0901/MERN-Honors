interface person {
    name: string;
    age: number;
}

interface employee extends person {
    gender: string;
    salary: number;
}

let emp = <employee>{};
emp.name = "sasi rachapotu";
emp.age = 19;
emp.gender = "Male"
emp.salary = 2000000

console.log(emp)