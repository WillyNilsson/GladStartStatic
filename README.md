# GLADSTART Static Site

A static version of the GLADSTART positive news website. This project is designed to be easily deployable to GitHub Pages.

## Features

- Browse positive news articles from around Sweden
- Filter articles by region and topic
- Explore regions by positivity score
- Simple and clean user interface

## Running Locally

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` to match your GitHub Pages URL
2. Run: `npm run deploy`

## Adding to GitHub

1. Create a new repository on GitHub
2. Initialize git, add files, and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/WillyNilsson/gladstart-static.git
git push -u origin main
