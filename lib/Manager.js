const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, teamName) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.teamName = teamName;
  }

  getName() {
    return `${this.name}`;
  }

  getId() {
    return `ID: ${this.id}`;
  }

  getEmail() {
    return `${this.email}`;
  }
  getOfficeNumber() {
    return `${this.officeNumber}`;
  }

  getTeamName() {
    return `${this.teamName}`;
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = { Manager };
