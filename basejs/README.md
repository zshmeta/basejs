# BaseJS

BaseJS is a simple CLI tool to generate project templates with customization options. It helps you quickly set up new projects based on predefined templates.

## Features

- Choose from various project templates.
- Customize template settings during setup.
- Automatically initialize a git repository.
- Install dependencies automatically.
- Add a project description to the README file.

## How to use

1 . install the package globally

```sh
   npm install -g
   basejs <template-name>
```

2 . run using npx or bunx

```sh
   npx basejs <template-name>
   bunx basejs <template-name>
```

### Explanation

1. **Project Structure**:
   - `src/basejs.js`: The main for our tool.
   - `bases/`: Directory containing project bases.
   - `index.js`: Entry point.
   - `README.md`: README for basejs.

2. **Dependencies**:
   - Used `inquirer` for user prompts.
   - Used `chalk` for colored output.
   - Used `shelljs` for shell commands.

3. **Templates**:
    - front: A base template for your React project that leverages bun and vite.
    - micro-front: A base template for an app structured as micro-fronts making use of federation.
    - back: A base template to develop an api or a single backend function with nodemon and express.
    - full-back: A base project structured as a full backend app. Server, API, DB and utils to hook a front
    - npm: A basic NPM package base to develop a cli tool or library.
    - component: A base template to develop a web component with lit-element and vite.
    - serverless: A base template to develop a serverless function using the workers model.
    - mobile: A base template to develop a mobile app using react-native.

4. **Commands**:
    - `basejs <template-name>`: To create a new project based on the selected template.
    - `basejs list`: To list all available templates.
    - `basejs help`: To display help information.

5. **Dev notes and license**:

This project was authored by [belka hedia](https://zshmeta.dev) and is licensed under the MIT license.
