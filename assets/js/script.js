const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the project description',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter any usage information',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the associated license',
            choices: ['Apache 2.0', 'MIT', 'WTFPL', 'MS-PL', 'Unlicensed'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidelines',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter details of tests',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your email address to provide to users for further questions',
        },
    ]);

// function to write README file
function writeToFile(fileName, data) {
    const fs = require("fs");
    const util = require("util");
    const writeFileAsync = util.promisify(fs.writeFile);

    return writeFileAsync(fileName, data);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();