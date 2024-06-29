#!/usr/bin/env node

import inquirer, { QuestionCollection } from "inquirer";
import fs from "fs";
import { execSync } from "child_process";
import path from "path";

// Error handling function with type annotation for the error parameter
const handleErrors = (err: unknown): void => {
  console.error("\x1b[31m", "Error:", err);
  process.exit(1);
};

// Function to copy the template files to the new project directory
const createDirectoryContents = (templatePath: string, projectPath: string, projectName: string): void => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = path.join(projectPath, file);
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(projectPath, file));

      // recursive call
      createDirectoryContents(path.join(templatePath, file), path.join(projectPath, file), projectName);
    }
  });
};

// main generation function 
async function basedjs() {
  try {
    console.log("\x1b[36m%s\x1b[0m", "🚀✍️ BaseJS! ✨");
    console.log("\x1b[36m%s\x1b[0m", "Let's create a new project...");

    // Define __dirname for ES6 modules
    const __dirname = path.dirname(new URL(import.meta.url).pathname);

    // Populate choices with directory names
    const CHOICES = fs.readdirSync(path.join(__dirname, 'bases'));

    // Define questions for CLI prompts
    const BASENAME: QuestionCollection = [
      {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
          if (/^([A-Za-z\-_\d])+$/.test(input)) return true;
          return 'Project name may only include letters, numbers, underscores, and hyphens.';
        },
      },
    ];

    const CURR_DIR = process.cwd();
    const projectChoice = process.argv[2];
    const projectName = process.argv[3] || (await inquirer.prompt(BASENAME))['project-name'];
    const templatePath = path.join(__dirname, 'bases', projectChoice);
    const projectPath = path.join(CURR_DIR, projectName);

    if (fs.existsSync(projectPath)) {
      return console.error("\x1b[31m", "Project with this name already exists.");
    }

    fs.mkdirSync(projectPath);
    createDirectoryContents(templatePath, projectPath, projectName);

    // Initialize git repository and make initial commit
    console.log("\x1b[33m%s\x1b[0m", "Initializing git repository...");
    execSync(`cd ${projectPath} && git init && git add . && git commit -m "Initial commit"`, { stdio: "inherit" });

    // Install dependencies
    console.log("\x1b[33m%s\x1b[0m", "Installing dependencies...");
    execSync(`cd ${projectPath} && npm install`, { stdio: "inherit" });

    console.log("\x1b[32m%s\x1b[0m", "Done! Happy Hacking!");
  } catch (err) {
    handleErrors(err);
  }
}

export default basedjs;