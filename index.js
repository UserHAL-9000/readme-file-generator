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
    const README = generateREADME();

    const fileName = 'README.md';
    fs.writeFile(fileName, README, (err) => {
        err ? console.log(err) : console.log(`Successfully created ${fileName}`);
    })
}

init();