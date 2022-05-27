const getLicenses = require("./licenseUtil");

function renderLicenseLink(license) {
  let licenseLink = licenses[license].link;

  return `
    (${licenseLink})
  `;
}

function renderLicenseBadge(license) {
  if (license === "NONE") return ``;

  let licenses = getLicenses();
  let licenseBadge = licenses[license].badge;

  return `[![License](${licenseBadge})]${renderLicenseLink(license)}`;
}

function renderTitleSection(title, license) {
  return `
    # ${title}
    ${renderLicenseBadge(license)}
  `;
}

function renderDescriptionSection(description) {
  return `
    ## Description

    ${description}
  `;
}

function renderTableOfContentsSection() {
  return `
    ## Table of Contents

    * [Description](#description)

    * [Installation](#installation)

    * [Usage](#usage)

    * [License](#license)

    * [Contributing](#contributing)

    * [Tests](#testing)
  `;
}

function renderInstallationSection(installation) {
  return `
    ## Installation

    To install the necessary dependencies, run the following command:

    \`\`\`
    ${installation}
    \`\`\`
  `;
}

function renderUsageSection(usage) {
  return `
    ## Usage

    ${usage}
  `;
}

function renderLicenseSection(license) {
  if (license === "NONE") return `This project is not under a license.`;

  return `
    This project is licensed under the ${license} license.
  `;
}

function renderContributingSection(contributing) {
  return `
    ## Contributing

    ${contributing}
  `;
}

function renderTestInstructionsSection(testInstructions) {
  return `
    ## Tests

    To run tests, run the following command:

    \`\`\`
    ${testInstructions}
    \`\`\`
  `;
}

function renderQuestionsSection(email, githubUsername) {
  return `
    ## Questions

    If you have any questions about the repository, open an issue or contact me directly at ${email}. You can find more of my work at [${githubUsername}](https://github.com/${githubUsername}/).
  `;
}

function generateMarkdown(data) {
  return `
    ${renderTitleSection(data.title)}

    ${renderDescriptionSection(data.description)}

    ${renderTableOfContentsSection()}

    ${renderInstallationSection(data.installation)}

    ${renderUsageSection(data.usage)}

    ${renderLicenseSection(data.license)}

    ${renderContributingSection(data.contributing)}

    ${renderTestInstructionsSection(data.testInstructions)}

    ${renderQuestionsSection(data.email, data.githubUsername)}
    `;
}

module.exports = generateMarkdown;
