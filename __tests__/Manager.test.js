const { TestScheduler } = require("jest");
const { Manager } = require("../lib/Manager");

test("Create new Manager", () => {
  const manager = new Manager("John", 1, "email@email.com", 555_555_555);

  expect(manager.name).toBe("John");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
