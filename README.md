# Updated Portfolio 2025

### Note
Not deployed at the time of writing.

### Getting Started

The following will get the website up and running on your local environment.

### Prerequisites

- [The lastest version of this repo](https://github.com/boothe0/portfolio2025)
- [The npm package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Setup
Developed in visual studio code it is recommended you use a similar editor or there may be extra steps needed to be taken.

#### Step 1: Clone the repo
```
git clone git@github.com:boothe0/portfolio2025.git
```
### Step 2: Check npm version within the project
```
npm -v
```
### Step 3: If npm is found run the local version of the website 
```
npm run dev
```
### Step 4: Run tailwind css
```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
Note that this should be in another terminal opened in the same folder as the project running at the same time as npm run dev for the most current css changes.

### Extras
If a different build tool is desired change the scripts section under the package.json file to match.

### Features of Note
1. Deployed with React JS on githubpages.
2. Dynamic tables in viewpoint section.
3. Utilized tailwind css for the first time.
4. Mobile-first design principles were implemented throughout the development cycle.

### Link to website
[Portfolio2025](https://boothe0.github.io/portfolio2025/)
