function renderTitleSection(title) {}

function renderDescriptionSection(description) {}

function renderTableOfContentsSection(tableOfContents) {}

function renderInstallationSection(installation) {}

function renderUsageSection(usage) {}

function renderContributingSection(contributing) {}

function renderTestInstructionsSection(testInstructions) {}

function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
    ${renderTitleSection(data.title)}
    ${renderDescriptionSection(data.description)}
    ${renderTableOfContentsSection(data.tableOfContents)}
    ${renderInstallationSection(data.installation)}
    ${renderUsageSection(data.usage)}
    ${renderContributingSection(data.contributing)}
    ${renderTestInstructionsSection(data.testInstructions)}
    ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
