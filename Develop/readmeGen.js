class markdown {
    static licenseBadge(license){
        const badge = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        }
        return badge[license]
    }
    static renderLicense(license){
        const licLinks = {
            mit: '[mit] {https://choosealicense.com/licenses/mit/#}',
            isc: '[isc] {https://chooselicense.com/licenses/isc/}',
            GNUGPLv3: '[GNUGPLv3] {https://choosealicense.com/licenses/gpl-3.0/}'

        }
        return licLinks[license]

    }
    static renderLicenseSection(license){
        if (license){
            return`license is under the ${this.renderLicense(license)}license`
        }else {
            return``
        }
    }

    static generateReadme(answers){
return`
# ${answers.title}

${this.licenseBadge(answers.license)}

## table of Content
- [Project Description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Question](#Question)
- [License](#License)

# Description

${answers.description}
    
## Usage
${answers.usage}
    
## Installation
${answers.installation}
                        
## Contributing
${answers.contributing}

## Question
${answers.question}

## License
${this.renderLicenseSection(answers.license)}
`
    
    }
}
module.exports = markdown;