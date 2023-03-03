const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, contents, usage, license, features, tests }) => {
    return `# ${title}
## Description
    ${description}
## Table of Contents
    ${contents}
## Usage
    ${usage}
## License
    ${license}
## Features
    ${features}
## Tests
    ${tests}`
}

const init = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of Contents?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Application Usage?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License Information?',
    },
    {
        type: 'input',
        name: 'features',
        message: 'Application Features?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests Used?',
    }]).then((answers) => {
        console.log(answers);

        const README = generateREADME(answers);

        const fileName = 'README.md';
        fs.writeFile(fileName, README, (err) => {
            err ? console.log(err) : console.log(`Successfully created ${fileName}`);

        })

    });

}

init();