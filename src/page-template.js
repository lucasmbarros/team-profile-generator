const createTeam = (teamArr) => {
  const managerInfo = (manager) => {
    return `
   
    <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-dark text-white">
      <h5 class="card-title text-white">${manager.getName()}</h5>
      <p class="card-text manager text-white"><i class="fas fa-briefcase"></i> ${manager.getRole()}</p>
    </div>
    <div class="container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fas fa-id-badge"></i> ${manager.getId()}</li>
      <li class="list-group-item"><i class="fas fa-at"></i> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item"><i class="fas fa-phone"></i> ${manager.getOfficeNumber()}</li>
    </ul>
    </div>
  </div>
 `;
  };

  const engineerInfo = (engineer) => {
    return `
   
    <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-dark text-white">
      <h5 class="card-title text-white">${engineer.getName()}</h5>
      <p class="card-text engineer text-white"><i class="fas fa-clipboard"></i> ${engineer.getRole()}</p>
    </div>
    <div class="container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fas fa-id-badge"></i> ${engineer.getId()}</li>
      <li class="list-group-item"><i class="fas fa-at"></i> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item"><i class="fab fa-github"></i> <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </ul>
    </div>
  </div>
 `;
  };

  const internInfo = (intern) => {
    return `
   
  <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-dark text-white">
      <h5 class="card-title text-white">${intern.getName()}</h5>
      <p class="card-text intern text-white"><i class="fas fa-graduation-cap"></i> ${intern.getRole()}</p>
    </div>
    <div class="container bg-secondary p-4">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fas fa-id-badge"></i> ${intern.getId()}</li>
      <li class="list-group-item"><i class="fas fa-at"></i> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item"><i class="fas fa-school"></i> ${intern.getSchool()}</li>
    </ul>
    </div>
  </div>
  `;
  };

  const html = [];

  html.push(
    teamArr
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerInfo(manager))
  );

  html.push(
    teamArr
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerInfo(engineer))
  );

  html.push(
    teamArr
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internInfo(intern))
  );

  return html.join(" ");
};

module.exports = (teamArr) => {
  return `
  
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

</head>

<body>
${teamArr
  .filter((employee) => employee.getRole() === "Manager")
  .map(({ teamName }) => {
    return `
    <div class="jumbotron bg-dark jumbotron-fluid text-white">
<div class="container text-center">
<h1 class="display-4">${teamName}</h1>
</div>
</div>
  `;
  })
  .join("")}

<main>
 <div class="d-flex justify-content-around">
  ${createTeam(teamArr)}
 </div>
</main>


</body>

</html>
  `;
};
