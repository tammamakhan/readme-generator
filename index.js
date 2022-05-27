// TODO: Include packages needed for this application
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
