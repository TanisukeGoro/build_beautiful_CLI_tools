var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'list',
      name: 'region',
      message: 'Choose A Region.',
      choices: ['Americas', 'Europe', 'Asia Pacific']
  }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answer);
  });
  