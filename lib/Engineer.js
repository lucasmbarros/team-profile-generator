const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name = "", id = "", email = "", github = "") {
    super(name, id, email);
    this.githubEngineer = github;
  }

  getName() {
    return `Employee Name: ${this.nameEngineer}`;
  }

  getId() {
    return `ID: ${this.idEngineer}`;
  }

  getEmail() {
    return `Email: ${this.emailEngineer}`;
  }
  getGithub() {
    return `Github: ${this.githubEngineer}`;
  }

  getRole() {
    return `Engineer`;
  }
}

const promptEngineer = (engineerData) => {
  this.engineerInfo = [];
  console.log(`
  =================
  Add a New Engineer
  =================
  `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer's employee ID (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter engineer's employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "Enter engineer's email address: (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter engineer's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "link",
        message: "Enter the link to engineer's Github. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter engineer's Github link!");
            return false;
          }
        },
      },
    ])
    .then((engineerInfo) => {      
      this.engineerInfo.push(
        new Engineer(
          engineerInfo.name,
          engineerInfo.id,
          engineerInfo.emailAddress,
          engineerInfo.link
        )
      );
      return engineerData;
    });
};

module.exports = {Engineer, promptEngineer};
