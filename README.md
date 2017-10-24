# MEAN stack application.

## Description

This is an app I have put together that takes a .CSV file and loads it onto a Mongo Database.  It has been built with the MEAN Stack(MongoDB, ExpressJs, AngularJs, and NodeJs).

----

## Technologies

### Frameworks
- MongoDB
- AngularJs
- NodeJs

### npm packages
 - body-parser
 - express
 - mongoose
 - ya-csv
 - nodemon
 
 ## Set-up
 1. In the terminal type `npm install` to install the npm packages in the package.json file
 2. Get `mongod` running in its own terminal
 3. Get `nodemon` running in its own terminal. You should see a message in saying "listening on localhost:3000"
 4. Now it is time to go to the browser and type in the url `http://localhost:3000/seed` to seed the data from the .CSV file in the file.
 5. The site should be up and running!  Go to `http://localhost:3000/` to see the site.
 6. At the top of the page, you will see a blue box that says _Create new item form (click here)_ This will allow you to add a new item to the database.
 7. Below that, there is a search bar. As you type into this bar, it will change the list of items below the bar.
 8. If you click on any one of the items below, it will show a more descriptive version of that one item.
 9. Each individual page has a back button, an update button, and a delete button.
 
 If anything in the list above does not work, please post an issue on this repo and tag @Toadilicious in it.  I will try to walk you through your issue.
