// TODO: Include packages needed for this application
const fs = require("fs");
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
const licenses = [...getLicenses().keys(), "NONE"];

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

function promptUser() {}

function init() {
  promptUser()
    .then((readmeData) => {
      return writeToFile("README.md", generateMarkdown(readmeData));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
