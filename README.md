# Eat-Da-Burger-App
Node | Express | MySQL | Handlebars

## Description

This application demonstrates a simple full stack application.

A user may enter any burger name to add it to the menu. This input also adds the burger entry into a MySQL database. The initial burger entry is added as *available* on the menu and placed on the left side of the screen. The user may then "devour" any burger by clicking on it, which moves it into the adjacent column and updates the status accordingly, in the database.

## Demo

You can demo this appliction [here](https://agile-lowlands-60074.herokuapp.com/index).

## Installation

To run the application locally, first clone this repository with the following command:

	git clone https://github.com/bradbotcode/Eat-Da-Burger-App.git
	
Next, install the application dependencies:

	cd eat-da-burger-app
	npm install
	
Finally, run the node server locally:

	node server
	
Now, open the local application on port 3000 at the URL: `http://localhost:3030/`.

