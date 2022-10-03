# Hello Node API Typescript

### Steps
```bash
mkdir project-folder
cd project-folder
npm init -y

yarn add -D typescript
yarn add --dev @tsconfig/node16
touch tsconfig.json
{
    "extends": "@tsconfig/node16/tsconfig.json"
}

yarn add express
yarn add -D @types/express
yarn add -D @types/node

mkdir src
touch src/app.ts

yarn add -D eslint


npx eslint --init

How would you like to use ESLint?: To check syntax and find problems
What type of modules does your project use?: JavaScript modules (import/export)
Which framework does your project use?: None of these
Does your project use TypeScript?: Yes
Where does your code run?: Node
What format do you want your config file to be in?: JavaScript
Install some additioanl eslint libraries. Choose Yes.
```
