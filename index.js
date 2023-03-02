const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = () => {
    return`# Your-Project-Title
    
## Description
    
## Table of Contents
    
## Installation
    
## Usage
    
## Credits
    
## License
    
## Badges
    
## Features
    
## Tests`
}

const init = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
    },
    {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    }]).then((answers) => {
        console.log(answers);
    });

    // const html = generateHTML();

    // const fileName = 'index.html';
    // fs.writeFile(fileName, html, (err) => {
    //      err ? console.log(err) : console.log(`Successfully created ${fileName}`);

    // })
}

init();