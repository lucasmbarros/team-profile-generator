const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(name = "", id = "", email = "", school = "") {
    super(name, id, email);
    this.school = school;
  }

  getName() {
    return `Employee Name: ${this.name}`;
  }

  getId() {
    return `ID: ${this.id}`;
  }

  getEmail() {
    return `Email: ${this.email}`;
  }
  getSchool() {
    return `School: ${this.school}`;
  }

  getRole() {
    return `Intern`;
  }
}

const promptIntern = (internData) => {
  this.internInfo = [];
  console.log(`
  =================
  Add a New Intern
  =================
  `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter intern ID (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter intern ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter intern email address: (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter intern email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter school name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter intern school name!");
            return false;
          }
        },
      },
    ])
    .then((internInfo) => {      
      this.internInfo.push(
        new Intern(
          internInfo.name,
          internInfo.id,
          internInfo.emailAddress,
          internInfo.school
        )
      );
      return internData;
    });
};

module.exports = {Intern, promptIntern};