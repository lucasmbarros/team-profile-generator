const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-site.js");
const generatePage = require("./src/page-template");
const {
  Employee,
  Engineer,
  Intern,
  Manager,
  promptEngineer,
  promptIntern,
} = require("./lib");

const addAnotherEmployee = () => {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to enter another employee?",
      default: false,
    },
  ]);
};

const promptUser = () => {
  return inquirer.prompt([
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
      name: "github",
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
      name: "emailAddress",
      message: "Enter your email address: (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter your office number: (Required)",
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
  ]);
};

const promptEmployee = (portfolioData) => {
  // if there's no "projects" array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  =================
  Add a New Employee
  =================
  `);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "description",
        message: "Provide the name of the employee (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "what is your employee's role? (Check which applies)",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((choice) => {
      if (choice.role === "Engineer") {
        console.log("Engineer");
        return promptEngineer();
      } else if (choice.role === "Intern") {
        console.log("Intern");
        return promptIntern();
      }
    })
    .then(addAnotherEmployee)
    .then((addEmployee) => {
      if (addEmployee.confirmAddEmployee) {
        return promptEmployee(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptEmployee)
  .then((portfolioData) => {
    return generatePage(portfolioData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
