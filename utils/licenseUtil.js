const licenses = {
  "M.I.T.": {
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
  },
  "APACHE 2.0": {
    badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  "BSD 3-Clause": {
    badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    link: "https://opensource.org/licenses/BSD-3-Clause",
  },
};

function getLicenses() {
  return licenses;
}

module.exports = getLicenses;
