// imports
const { Manager } = require("./Manager");
const { Engineer } = require("./Engineer");
const { Intern } = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const createPage = require("../src/page-template");
const path = require("path");

// declare creation directory
const finalPage = path.resolve(__dirname, "../dist",);
const pagePath = path.join(finalPage, "index.html");

// Arrays
const teamArr = [];
const managerArr = [];

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter team manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter your employee ID (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address: (Required)",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "teamName",
        message: "What is the name of your team? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your team's name!");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber,
        managerData.teamName
      );
      teamArr.push(manager);
      managerArr.push(managerData.id);
      promptChoice();
    });
};

const promptEngineer = () => {
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
        name: "email",
        message: "Enter engineer's email address (Required)",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's Github username (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter engineer's Github username!");
            return false;
          }
        },
      },
    ])
    .then((teamData) => {
      const engineer = new Engineer(
        teamData.name,
        teamData.id,
        teamData.email,
        teamData.github
      );
      teamArr.push(engineer);
      promptChoice();
    });
};

const promptIntern = () => {
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
        name: "email",
        message: "Enter intern email address: (Required)",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter school name (Required)",
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
    .then((teamData) => {
      const intern = new Intern(
        teamData.name,
        teamData.id,
        teamData.email,
        teamData.school
      );
      teamArr.push(intern);
      promptChoice();
    });
};

const promptChoice = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "team",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((choice) => {
      if (choice.team === "Engineer") {
        console.log("Engineer");
        return promptEngineer();
      } else if (choice.team === "Intern") {
        console.log("Intern");
        return promptIntern();
      } else if (choice.team === "Exit") {
        return makePage();
      }
    });
};

const makePage = () => {
  if (!fs.existsSync(finalPage)) {
    fs.mkdirSync(finalPage);
  }
  fs.writeFileSync(pagePath, createPage(teamArr), "utf-8");
};

module.exports = promptUser;
