# Snack Or Booze Assessment

## Description

This project is an assessment of a students React knowledge.  
There are three parts to this assessment :

### Part One - Conceptual Q&A

Students answer questions about React and the packages that help build React apps.

### Part Two - Unroll

Students are tasked with writing a function called `unroll`, which takes in a square array of arrays (i.e. a grid with n rows and n columns), and returns a single array containing the values in the square. Unroll should obtain the values by traversing the square in a spiral: from the top-left corner, move all the way to the right, then all the way down, then all the way to the left, then all the way up, and repeat.  
Students must also write a test suite for this function.

### Part Three - Snack Or Booze App

Students are given some starter code for an app that resembles a site you would see for a cafe or restaurant. They are tasked with expanding the functionality of the app utilizing all they've learned about React, react-router-dom, hooks, React forms, and refactoring Components to be more re-usable.

## Installation

1. Clone the repository :

   ```bash
   git clone https://github.com/SeanBailey15/Snack_Or_Booze_Assessment.git
   ```

2. Navigate into the directory :

   ```bash
   cd Snack_Or_Booze_Assessment
   ```

3. Navigate to, and install the dependencies for unroll :

   ```bash
   cd unroll
   ```

   ```bash
   npm install
   ```

4. Try unroll :

   From within the `unroll` directory, you can either run the function from the command line, or run the test suite :

   - Command line examples :

     ```bash
     # When passing string character matrices into the command line, be sure to use
     # quotes correctly, as in the following example:

     node unroll.js '[["a", "b", "c"],["d", "e", "f"],["g", "h", "i"]]'
     ```

     ```bash
     # To pass numbers only, quotes are unnecessary:

     node unroll.js [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
     ```

     ```bash
     #To pass a mix of strings and numbers:

     node unroll.js '[[1,"b",3,"d"],[5,"f",7,"h"],[9,"j",11,"l"],[13,"n",15,"p"]]'
     ```

   - To run the test suite from the command line :

     ```bash
     npm run test
     ```

5. Return to the root directory :

   ```bash
   cd ..
   ```

6. Navigate to, and install the dependencies for snack_or_booze :

   ```bash
   cd snack_or_booze
   ```

   ```bash
   npm install
   ```

7. Run the app :

   ```bash
   npm run start
   ```

\*_The terminal window will display a `Ctrl + click`-able link to the app on localhost:5173/_

## Explore Snack Or Booze

The Snack Or Booze app consists of four main routes, which can be navigated through using the nav-bar at the top of the page. It utilizes a simple JSON database to store various food and drink items.

### Home Page `"/"`

The home page welcomes the user and displays the current number of food items and drink items stored in the database.

### Snacks `"/snacks"`

Clicking on the Snacks link will display a list of every snack in the database. These are clickable links that will display details of a given item to the user.

### Snack Item `"/snacks/:id"`

This endpoint will display details such as item name, description, recipe, and serving suggestions.

### Drinks `"/drinks"`

Functionally the same as the Snacks link, except for the drink items.

### Drink Item `"/drinks/:id"`

I think you can guess...

### Add Item `"/add"`

Displays a form that allows users to add either a snack or drink to the database.

### Other Functionality

- The app will redirect users that try to enter an `id` that doesn't exist after either `/snacks` or `/drinks`.
- The app will display a 404 message if a user tries to navigate to an endpoint that isn't supported, such as `/desserts`.
- Upon submission of a new item into the database, users will be redirected to the endpoint that matches the category of item they created, where they will be able to find their item in the list of items. Also the hompage item counts will be updated appropriately.

## Thank you for checking out my project!

## Contact Me

You can reach out to me on social media:

- [Discord](https://discordapp.com/users/792831510515548220)
- [LinkedIn](https://www.linkedin.com/in/sean-bailey-619723279)
- [Facebook](https://www.facebook.com/profile.php?id=61556172566858)

Feel free to connect with me on any of these platforms!
