const studentName = "Kenneth Gasang";
const studentNumber = 1210858;

//const result = `${studentName} - ${studentNumber}`;

console.log(`${studentName} - ${studentNumber}`);

const headingPrimaryContent = document.querySelector("h1");
headingPrimaryContent.innerHTML = `${studentName} - ${studentNumber}`;
headingPrimaryContent.classList.add("headingPrimary");