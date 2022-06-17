// adds inquirer library
const inquirer = require('inquirer');
//adds the file system module
const fs = require('fs');
const { renderLicenseBadge , renderLicenseSection , generateMarkdown } = require('./utils/generateMarkdown')
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
        name: 'license',
        choices: [
            'MIT',
            'GNU',
            'None'
        ]
    }
];


// TODO: Create a function to write README file

function writeToFile(response) {
    console.log(response)
    const fileName = `${response.title.toLowerCase().split(' ').join('')}.md`;
    const license = response.license
    renderLicenseBadge(license);
    renderLicenseSection(license, response);
    fs.writeFile(`./assets/${fileName}`, generateMarkdown(response), (err) => err ? console.log(err) : console.log('Success!'))
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        writeToFile(response); 
    })
}

// Function call to initialize app
init();
