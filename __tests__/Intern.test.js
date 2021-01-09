const { TestScheduler } = require("jest");
const Intern = require("../lib/intern");

test("Create new intern", () => {
    const intern = new Intern("John", 1, "email@email.com", "ucf");    
    
    expect(intern.name).toBe("John");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
})