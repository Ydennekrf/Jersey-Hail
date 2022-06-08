// adds inquirer library
const inquirer = require('inquirer');
//adds the file system module
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Who is the author of this project?',
        name: 'author'
    },
    {
        type: 'checkbox',
        message: 'What sections do you require?(choose all that apply)',
        name: 'table-of-contents',
        choices: [
            'description', 'install', 'useage', 'contribute', 'testing', 'Contact Info', 'license'
        ]
    },
    {
        type: 'input',
        message: 'Write a description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Write out the installation process',
        name: 'install'
    },
    {
        type: 'input',
        message: "Explain how this will be used",
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Explain how people can contribute to the project',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Explain how to use the tests for your application',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your Git Hub user name',
        name: 'gitHubUser'
    },
    {
        type:'input',
        message: 'What is your email',
        name: 'email'
    },
    {
        type: 'list',
        message: 'what kind of license',
        choices: [
            'MIT',
            'GNU',
            'None'
        ]
    }
];
.then((response) => fs.writeFileSync( questions.title , response ))


// TODO: Create a function to write README file
let fileName = 
function writeToFile(fileName, response) {
    fs.writeFileSync(`${fileName}`, )
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
