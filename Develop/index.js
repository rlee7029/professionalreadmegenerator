
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project name?.",
  },
  {
    type: "input",
    name: "description",
    message: "What is this project about?.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose from the following for the license you used.",
    choices: ["MIT", "APACHE2.0", "Arthistic-2.0", "afl-3.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "usage",
    message:
      "What langugaes have you used to create this project?.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors by inserting their github username .",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Was there any test that needed for this project? Please explain if any test were used.",
  },
  {
    type:"input",
    name:"questions",
    message:"Any questions for this project?"


  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Please wait for your README file is being created.");
    writeToFile("./example", generateMarkdown({ ...responses }));
  });
}
init();