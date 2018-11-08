# Virtual-Trainer

[App Demo](https://drive.google.com/file/d/1Pg9Sg8RtmzQEMFubA4Y2zIfn29_tcG0o/view)

[Heroku Link](https://evening-bastion-35416.herokuapp.com/).

###Summary:
A health and fitness assistant that tracks calories, search for healthy food articles for your goals.

###Design Layout:

1. Main Page: This page welcomes you to the app with inspirational quote. This page has the Home button, Login button, SignUp button. If the user already have an account, he/she can login with their unique username and password. The app will verify both the credentials and redirect the user to the profile page.

2. SignUp Page: The SignUp page is created using passport.js. It takes only unique username by checking the database for the username before approving. If exists, it ask for another username. The Password provided is saved in the database after its converted to hash password using bcryptjs.

3. Login Page: The Login page is to authenticate the user's credentials. If the user has provided with the correct credientials, then it takes the user to the profile page and the user can navigate the app with the help of the navigation bar. And if the user credential doesn't match, it gives an alert message.

4. Profile Page: When the user loginin then, the user is redirected to the profile page where the user can see the profile information like his/her's height, weight, age, goal to attend. If the user is new, the user can go to the enter profile information by clicking the 'update profile button'.

5. Nutrition Page: Here the user can enter the meal information like the recipe and the ingredients to get the total calories consumed for that particular meal and also it displays the breakdown of the calories. This way a user can keep track of the calorie intake.

6. Article Page: Here the user can search articles realted to nutritional food. The user can read the article and can save for future referance.

7. Logout: When the user wants to exit the app, he/she can click the logout button to exit. It will delete all information like the username, password form the session, cookie etc. This way the user's information remain safe.

###Built With:
. ReactJS, NodeJS
. Express
. PassportJS, BcryptJS
. Bootstrap, CSS
. MongoDB, Mongoose
. Edamam API

###Deployment:
The app is deployed to Heroku.

###Team Members:
. Bilal Saeed
. Ei Wai Khin
. Diana Julaton
. Reena Mahapatra
. Roy DeGaetano
