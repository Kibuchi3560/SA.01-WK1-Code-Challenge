let basicSalary = parseFloat(prompt("Enter your basic salary:"));
console.log("Basic Salary :" + basicSalary);
//Input your benefits of the benefits variable below
let benefits = parseFloat(
    prompt("Enter your benefits into the benefits variable")
);// ensure cthat number entered is a float
console.log ("Benefits" + benefits);
let grossSalary = basicSalary + benefits;
console.log("Gross Salary:" +grossSalary);

function calculatePAYE () {
    if (grossSalary < 24001)
        return (PAYE = (10 * grossSalary) / 100);
    else if (grossSalary < 32334) 
        return (PAYE = (25 * grossSalary) / 100);
    else if (grossSalary < 500001) 
       return (PAYE = (30 * grossSalary) / 100);
    else if (grossSalary < 800001) 
       return (PAYE = (32.5 * grossSalary) / 100);
    else 
    return (PAYE = (35 * grossSalary) / 100);
};//calculatePayee function with conditional statements to calculate paye

console.log("PAYE:" + calculatePAYE());
//call of function to work and also output paye

function calculateNHIF () {
    if(grossSalary < 6000) 
        return (NHIF = 150);

    else if (grossSalary < 8000)
        return (NHIF = 300);
    else if (grossSalary < 12000)
        return (NHIF = 400);
    else if (grossSalary < 15000)
        return (NHIF = 500);
    else if (grossSalary < 20000)
        return (NHIF = 600);
    else if (grossSalary < 25000)
        return (NHIF = 750);
    else if (grossSalary < 30000)
        return (NHIF = 850);
    else if (grossSalary < 35000)
        return (NHIF = 900);
    else if (grossSalary < 40000)
        return (NHIF = 950);
    else if (grossSalary < 45000)
        return (NHIF = 1000);
    else if (grossSalary < 50000)
        return (NHIF = 1100);
    else if (grossSalary < 60000)
        return (NHIF = 1200);
    else if (grossSalary < 70000)
        return (NHIF = 1300);
    else if (grossSalary < 80000)
        return (NHIF = 1400);
    else if (grossSalary < 90000)
        return (NHIF = 1500);
    else if (grossSalary < 100000)
        return (NHIF = 1600);
    else {
        return (NHIF = 1700);
    }
};
//Function calulateNhif tha works on finding out NHIF
console.log ("NHIF:" + calculateNHIF());
// Call out of function calulateNhif in order to work 

let NSSF = 420;
console.log("NSSF(Tier 1): " + NSSF);
let totalDeduction = calculateNHIF() + calculatePAYE();
// calculates total deductions
console.log("Total Deductions:" + totalDeduction);

let netSalary = grossSalary - totalDeduction;
//calculate net salary by subtracting grossSalary to Total dedutions
console.log("Net Salary:" + netSalary);
    