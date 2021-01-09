class Manager {
  constructor(name = "", id = "", email = "", officeNumber = "") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
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
  getOfficeNumber() {
    return `Office Number: ${this.officeNumber}`;
  }

  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;
