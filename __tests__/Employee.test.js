const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

test("Create new employee", () => {
  const employee = new Employee("John", 1, "email@email.com");

  expect(employee.name).toBe("John");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
