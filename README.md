# SnugCamps

SnugCamps is a web application where users can create, edit, update and delete different campgrounds. The users can also rate and review the campgrounds. In order to add, edit or delete anything a user must have an account and must be fully authenticated. This project was a part of a Full Stack Web Developent Bootcamp provided by Udemy.

## Technical Requirements

1. Node.js 14.17.0 
2. NPM 6.14.13 
3. Bootstrap 5.2.0-beta1 
4. mongoose 6.0.0 
5. passport-local 1.0.0 
6. Joi.dev 17.6.0  

Passport.js is used for authentication and Joi.dev is used for form validation.  

## Features

1. Users can <b>create, update and delete</b> different campgrounds.
2. Users can rate different campgrounds with the help of <b>Five Star Rating functionality</b>.
3. Only <b>authenticated</b> users can access the functionality to make any changes in the campgrounds or reviews.
4. A user can make changes to only those campgrounds or reviews which is created by them.
5. A simple, clear and readable form validations are added into the application with the help of <b>joi.dev</b>
6. <b>Interactive</b> Maps are added into the application with the help of <b>Mapbox API</b>. 
7. <b>Error Handling</b> is done in each phase of the project to provide a better user experience. 

## Run it locally

1. Install mongodb
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/Shamikh05/SnugCamps.git  
cd SnugCamps  
npm install 
```


3. Create a .env file (or just export manually in the terminal) in the root of the project and add the following:

```
DATABASEURL='<url>'  
API_KEY=''<key>  
API_SECRET='<secret>'  
```
  
4. Run mongod in another terminal and node app.js in the terminal with the project.  

5. Then go to localhost:3000.  

## Note

This project is still on development. Feel free to clone, modify, test or contribute.  

## Screenshots

#### Home Page

![Screenshot (384)](https://user-images.githubusercontent.com/54002765/169715172-25ed95b8-c549-44da-955a-c7cd516e5f62.png)

#### Campgrounds Page

![Screenshot (385)](https://user-images.githubusercontent.com/54002765/169715210-b8b7e568-9f02-4d17-a1d0-8e51df5728f6.png)

![Screenshot (386)](https://user-images.githubusercontent.com/54002765/169715276-f4f3b42d-a481-4a18-bb0a-f71dfb0d40a4.png)

#### Show Campground Page

![Screenshot (391)](https://user-images.githubusercontent.com/54002765/169715307-8b82950d-b0e3-48ff-860f-ed88f5e768db.png)

#### Create Campground Page

![Screenshot (390)](https://user-images.githubusercontent.com/54002765/169715407-b93204db-b188-472a-8c8a-cfb3d4a6da11.png)

#### Login Page

![Screenshot (388)](https://user-images.githubusercontent.com/54002765/169715356-774a820b-42be-419b-b8d2-a6aac257da87.png)

#### Register Page

![Screenshot (389)](https://user-images.githubusercontent.com/54002765/169715378-d4cad609-6f3b-4325-810b-a2722abd980a.png)

