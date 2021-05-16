// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'none') {
    return `[License](#license) `
  }
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none') {
    return `## License
    Project licensed under ${license}`
  }
  return ``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}


<!-- Project Table of Contents -->
<details>
  <h2 class="display-inline-block">Description</h2>
  ${data.projectDescription}

  <summary>
  <h2 class="display-inline-block">Table of Contents</h2>
  </summary>
  <ul>
    <li><a href="#about-project">About The Project</a></li>
    <li><a href="#projectInstall">Installation</a></li>
    <li><a href="#links">Project Links</a></li>
    <li><a href="#inquiries">Inquiries</a></li>
  </ul>
</details>

<!-- About Project Section -->
## About The Project

${data.screenshots}

${data.projectUsage}

${data.projectLink}

<h5 class="text-dark">
&copy; ${new Date().getFullYear()} by ${data.name}
</h5>

Project Technologies:

${data.technologies}

<!-- Installation -->
## Installation

${data.projectInstall}

<!-- Inquiries -->
## Inquiries

GitHub Username: ${data.githubUsername}

Name: ${data.name}

email: ${data.email}

${renderLicenseSection()}

${renderLicenseLink(data.license)}

${renderLicenseBadge(data.license)}

<!-- Project Badges -->
## Project Badges

${data.badges}
`;
}

// run index.js to generate new readme.md
module.exports = generateMarkdown;