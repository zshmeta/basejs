#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs'

//define __dirname for es6 modules

const __dirname = new URL('.', import.meta.url).pathname;


const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];


const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS)
  .then(answers => {
  console.log(answers);
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;
  
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    createDirectoryContents(templatePath, projectName);
    execSync(`cd ${projectPath} && npm init -y`, { stdio: "inherit" });
  });


function createDirectoryContents (templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);
  
    filesToCreate.forEach(file => {
      const origFilePath = `${templatePath}/${file}`;
      
      // get stats about the current file
      const stats = fs.statSync(origFilePath);
  
      if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        
        const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
        fs.writeFileSync(writePath, contents, 'utf8');
      } else if (stats.isDirectory()) {
        fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');
            
            // Rename
            if (file === '.npmignore') file = '.gitignore';
          
            const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
            fs.writeFileSync(writePath, contents, 'utf8');
          }
        
        // recursive call
        createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
        console.log(`\x1b[36m%s\x1b[0m`, `Project ${projectName} initialized successfully!`);  // Cyan colored output

    // Install dependencies with yarn
        console.log("\x1b[33m%s\x1b[0m", "Installing dependencies...");  // Yellow colored output
        execSync(`cd ${projectPath} && yarn install`, { stdio: 'inherit' });

       console.log(`\x1b[32m%s\x1b[0m`, 'Dependencies installed successfully!');  // Green colored output
      } 
    }
    );
  }
  
