const inquirer = require("inquirer");
const fs = require('fs');
const util = require ('util');

const writeFileAsync = util.promisify(fs.writeFile)


const promptUser = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub Username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            },
            {
                type: 'input',
                name: 'projectname',
                message: 'What is your projects name?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project'
            },
            {
                type: 'list',
                name: 'license',
                message: 'What kind of license would you like your project to have?',
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
            },
            {
                type: 'input',
                name: 'command',
                message: 'What command should be run to install dependencies?',
                default: "npm i"
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?',
                default: "npm test"
            },
            {
                type: 'input',
                name: 'userinfo',
                message: 'What does the user need to know about using the repo?'
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'What does the user need to know about contributing to the repo?'
            },
            
        ]);
        
};



const generateMD = answers => {
return `
# ${answers.projectname}
    `
};

promptUser()
.then(answers => {
    const markdown = generateMD(answers);
    return writeFileAsync('randomread.md', markdown);
})
.then(() => {
    console.log('Successfully wrote to randomread.me')
}).catch(err => console.log(err));