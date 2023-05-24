function renderLicenseLink(license){
    if (license !== "none") {
        return '\n"[License](#license)\n';
    }
    return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseLink(data.license)}
  
  
  ## Title 
  ${data.title}


  ## Description
  ${data.description}


  ## Table of Contents
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## How to Use This Application:
  ${data.usage}
  
  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.test}

  ## Questions
  ${data.questions}

  ## Contact Info
  *Github username:${data.github}
  *Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;