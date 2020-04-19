# jackielamb.github.io

This is my development portfolio. 

Deployed to Github with the help of this [walkthrough.](https://medium.com/@elanaolson/deploying-a-personal-website-to-github-pages-da2af6167f8b)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

develop branch serves as my default branch where I track source code and master branch is the rendered JavaScript to help deploy to Github Pages.

Each time I update develop branch, I run this sequence to build to master.

`git checkout master`

`git pull origin develop`

`ng build --prod --base-href 'https://jackielamb/jackielamb.github.io'`

`ng deploy —branch=master`