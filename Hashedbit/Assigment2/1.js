function findTax(salary) {
    if (typeof salary !== "number" || salary <= 0) {
        return "Enter a valid salary";
    }
    switch (true) {
        case (salary <= 500000):
            return 0;
        case (salary <= 1000000):
            return salary * 0.1;
        case (salary <= 1500000):
            return salary * 0.2;
        default:
            return salary * 0.3;
    }
}

console.log(findTax(500000));   
console.log(findTax(1000000));   
console.log(findTax(1500000));   
console.log(findTax(2000000));   
console.log(findTax(-500000));   