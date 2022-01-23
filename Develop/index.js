// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./readmeGen');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter enter your project description?'
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is usage of this Project?"
    },
    {
        type: 'input',
        name: 'github', 
        message: 'What is your github link?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install this product?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who is contributing in this project?'
    },
    {
        type: 'input',
        name: 'question',
        message: 'What makes your project stand out?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select your license:',
        choices:['MIT','ISC','GNUGPLv3'],
        filter(value){
            return value.toLowerCase()
        }
    }


];
async function queryRun(){
    return inquirer.prompt(questions)
    .then((answers)=>{console.log(answers)
        const marks = markdown.generateReadme(answers)
        fs.writeFile('./README.md', marks, (err) => {
            if(err){
                console.log('not able to read file',err)
            }else{
                console.log('successfully! Created Readme file')
            }
        })
        
        })
        
    .catch((error)=>
    {
        console.log(error)
    })
}
queryRun()


