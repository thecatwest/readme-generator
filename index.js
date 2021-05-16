// TODO: Include packages needed for this application
const generateReadme = require('./src/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const readmeQuestions = (readmeAnswers) => {
    // clg app intro message
    console.log(`
    =============================
    Create New Project Readme.MD
    =============================`);

    // if no answers entered, set empty array
    if (!readmeAnswers) {
        readmeAnswers = []
    }

    // otherwise, capture answers to prompts
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name (Required)',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('*Please enter your name*');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'Enter the name of your project (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('*Please enter the name of your project*');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('*Please enter your GitHub username*');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter a project description'
        },
        {
            type: 'input',
            name: 'projectLink',
            message: 'Enter GitHub link to this project (Required)',
            validate: (projectLink) => {
              if (projectLink) {
                return true;
              } else {
                console.log('Please enter the Github link to this project');
                return false;
              }
            },
          },
        {
            type: 'input',
            name: 'projectInstall',
            message: 'Enter any installation instructions'
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Enter project usage information'
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'Select the technologies used in this project',
            choices: ['Bootstrap', 'CSS', 'ES6', 'JavaScript', 'jQuery', 'Node', 'Other']
        },
        {
            type: 'input',
            name: 'screenshots',
            message: 'Enter screenshot URLs'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Select a license to use with this project',
            choices: ['Apache license 2.0', 'GNU GPLv3', 'ISC', 'MIT License', 'None']
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
