class Intern {
  constructor(name = "", id = "", email = "", school = "") {
    this.name = name;
    this.id = id;
    this.email = email;
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

module.exports = Intern;