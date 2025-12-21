[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/xVM10Eiy)

# JavaScript 2 CA | Ólos

This project is a social media platform written with Vite and Tailwind CSS. You can check out the live website [here.](https://olos.netlify.app/)

## How to run the project

### Prerequisites

Make sure to have [Node.js](https://nodejs.org/) installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/NoroffFEU/js2-course-assignment-nicolaibye.git
```

Make sure you're in the vite-project folder:

```bash
cd vite-project
```

Install dependencies:

```bash
npm install
```

### Coding/Prod

To run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

This will create a dist folder that you can run on a local host:

```bash
npx serve dist
```

### Project Structure

```bash
/src/js/
constants/       #Constant variables getting used throughout the project
data/            #Api calls
helpers/         #Smaller, highly specific tasks that get reused
logic/           #Handles events and calls the right functions
present/         #Handles .js generating visuals for the user
/src/
login/           #Folders to make the url more clean
profile/
register/
main.js          #Connects the .js from src/js/ to the project.
style.css        #Connects the .css from src/css/ to the project.
/public          #Static assets
/vite.config.js  #Vite config for build
/package.json    #Project metadata and dependencies
```

### Dependencies

- Vite
- Tailwind CSS

### Contribution

If you want to add something to the project make sure to work within a new branch

```bash
git checkout -b 000-your-branch-name
```
