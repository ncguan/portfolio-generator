/* # Module 09 Mini-Project: Portfolio Generator

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

* Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

* An HTML document containing the information collected from the prompts should be constructed and written to the file system. Be sure to add some CSS styling to the document.

* You’ll need the following tools and technologies to accomplish this:

  * `fs` for writing to the file system

  * `inquirer` version 8.2.4 for collecting user input  by running `npm i inquirer@8.2.4`.

  * String template literals for generating a string version of the HTML document before it is written to the file system

## 💡 Hints

It might be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy and paste its contents into a string template literal. Then you can write a function to insert the user input into the appropriate places in the HTML string before writing it to the file system.

## 🏆 Bonus

* Instead of using callback functions, what are some other tools in JavaScript we can use to handle asynchronous functionality?

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
 */







const inquirer = require('inquirer');
const fs = require('fs');



/* name, location, bio, LinkedIn URL, and GitHub URL. */


inquirer
  .prompt([ 
    {
    type: 'input',
    message: "Enter your name",
    name: 'name'
    },

    {
    type: 'input',
    message: "Enter your location",
    name: 'location'
    },

    {
    type: 'input',
    message: "Enter a BIO",
    name: 'bio'
    },

    {
    type: 'input',
    message: "Enter your linkedin URL",
    name: 'linkedin'
    },

    {
    type: 'input',
    message: "Enter your GitHub URL",
    name: 'github'
    }

  ])

  .then((answers) => {
    



    let generateHTML = (answers) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Generator</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <!-- 
    /* name, location, bio, LinkedIn URL, and GitHub URL. */ -->
    
    <h1>${answers.name}</h1>
    <h2>${answers.location}</h2>
    <p>${answers.bio}</p>
    <a href="${answers.linkedin}">Linkedin</a>
    <a href="${answers.github}">GitHub</a>
    
    </body>
    </html>
    `


  fs.writeFile('index.html', generateHTML(answers), (err) => {
    if (err)
      console.log(err);})

  })


  