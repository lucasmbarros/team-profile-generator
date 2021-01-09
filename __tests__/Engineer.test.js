const { TestScheduler } = require("jest");
const Engineer = require("../lib/Engineer");

test("Create new engineer", () => {
  const engineer = new Engineer("John", 1, "email@email.com", "github.io");

  expect(engineer.name).toBe("John");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
