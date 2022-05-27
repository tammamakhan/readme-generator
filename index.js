const fs = require("fs");
const inquirer = require("inquirer");
const getLicenses = require("./utils/licenseUtil");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  "What is your Github username?",
  "What is your email address?",
  "What is your project's name?",
  "Please write a short description of your project?",
  "What kind of license should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about using the repository?",
  "What does the user need to know about contributing to the repository?",
];
const licenses = [...Object.keys(getLicenses()), "NONE"];

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "README created.",
      });
    });
  });
}

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "githubUsername",
      message: questions[0],
      validate: (githubUsernameInput) => {
        if (githubUsernameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: questions[1],
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: questions[2],
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: questions[3],
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: questions[4],
      choices: licenses,
    },
    {
      type: "input",
      name: "installation",
      message: questions[5],
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter the command to install dependencies!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "testInstructions",
      message: questions[6],
      validate: (testInstructionsInput) => {
        if (testInstructionsInput) {
          return true;
        } else {
          console.log("Please enter the command to run tests!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: questions[7],
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter information about using the repository!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message: questions[8],
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log(
            "Please enter information about contributing to the repository!"
          );
          return false;
        }
      },
    },
  ]);
}

function init() {
  promptUser()
    .then((readmeData) => {
      console.log("Generating README...");
      return writeToFile("README.md", generateMarkdown(readmeData));
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
