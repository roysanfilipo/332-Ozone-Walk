#  :shell: :sweat_drops: :rainbow: 332-Ozone-Walk :rainbow: :high_heel: :anchor:

![Home Page](https://i.imgur.com/7bmHvjV.png)

### :computer: Creator:

- Roy Sanfilipo
[Github](https://github.com/roysanfilipo)

## :sunrise: About:

[332-Ozone-Walk](https://fip-332-ozone-walk.herokuapp.com/) is a single page web application that advertises the rental property located at 332 Ozone Walk in Fire Island Pines off the southern coast of Long Island, New York.

This is a simple site that allows the user to see a little of what they should expect while renting 332 Ozone Walk for a summer.

## :star: Features:
### The user can:
- Navigate to to the main page to see an image of the house and a navbar with buttons
- Click a button to learn a little about the property
- Click a button to see photos of the house
- Click a button to see features the house has to offer
- Click a button to see reviews about a house, add a review (only admin can delete the review)
- Click a button to find contact information

## :wrench: :nut_and_bolt: :hammer: The Build:
### Technologies:
- PHP Backend
- PostgreSQL
- ReactJS
- HTML5
- CSS
- MaterializeCSS
- emailJS Service for contact email backend
- Heroku

## :sun_with_face: :full_moon_with_face: My Timeline:
| Day           | Tasks         |
| ------------- |:-------------:|
| Friday 7/10    | Create Github Repo, Started README.md, Project Idea, User Stories, Wireframe |
| Saturday 7/11      | Research NERD stack, hooks and React Router and decide!  |
| Sunday 7/12      | Re-thinking everything and committing to PHP/SQL/ReactJS/AWS |
| Monday 7/13     | Gave up on the AWS idea and committing to Heroku. Built PHP backend for guestbook and created database and table locally with SQL. Built class components with ReactJS in my app.js file. Can display content in the browser. Figured out hot to toggle the Guestbook button and maintain functionality |
| Tuesday 7/14      | Implemented About, Photos, Features, and Contact buttons and toggle functions to go with them. |
| Wednesday 7/15      | Learned how to use emailJS and implemented with the sendEmail function in contact class and script in index.html file|
| Thursday 7/16      | Deployed to Heroku and tested everything to make sure it was working.  |
| Friday 7/17      | Added Nav class for nav buttons and moved toggle functions to the App class. Started to work with MaterializeCSS |
| Saturday 7/18      | Learned basic Adobe Lightroom to edit photos and added them to the photos class. Worked on MaterializeCSS and site responsiveness |
| Sunday 7/19      | Worked on styling and spacing of photos. Added styling to the footer. Fixed styling on the forms. |
| Monday 7/20      | Worked on styling for mobile vs desktop. I did this backwards again! |
| Tuesday 7/21      | Fixed a bunch of styling for mobile on the forms, updated README.md |


## :dancer: Wins:
- Excited that I figured out how to incorporate emailJS in my sendEmail function and that I got it working pretty quickly. It was a little tricky, but works well!
- Excited to see the potential of MaterializeCSS. I love the styling options for the buttons, cards, navbar, etc. The only styling I used outside of materialize was dealing with some mobile font sizing issues and the main page title font.
- The way the site is built, everything seems to load pretty smoothly.

## :sweat: Challenges:
- I was not able to create a user model so so that I could log in as an admin to show the delete buttons for the guestbook entries. I have the delete functionality and it shows if the admin state is set as true, but I will need to go back and add the ability to log in as an admin so that they appear without altering the code.
- For some reason my sites tend to start out looking better on desktop and I end up using a media query to style the mobile version. I know this is backwards and I need to remember to do this in reverse. It was also sort of difficult at times to battle the MaterializeCSS, especially for the font-sizes on the forms. I had to use some work-arounds to get things to work properly, so I will need to go back and figure out if there are better ways of handling this.
- They app may or may not work sometimes when you add a guestbook entry from safari? I've tested it and it is inconsistent. I'm not sure if it is a PostgreSQL, Safari, or Heroku issue or all of the above! I will have to keep investigating!

## :blue_book: Sources:
- Materialize Framework
[MaterializeCSS](https://materializecss.com/)
- Instagram Logo
[icons8](https://img.icons8.com/)


## Creating my PostgreSQL Database and Table:

CREATE DATABASE guestbook;
CREATE TABLE
  entries
  ( id serial, title TEXT, date DATE, note TEXT);

  INSERT INTO
  entries ( title, date, note )
VALUES
  ( 'Great experience!' , '2020-06-05', 'Had so much fun at 332! It is a clean house with lots to offer. We will be back!' );

  INSERT INTO
  entries ( title, date, note )
VALUES
  ( 'So much fun!' , '2020-07-05', 'Beautiful home owned by some very nice guys! Look forward to booking again next year!' );

  INSERT INTO
  entries ( title, date, note )
VALUES
  ( 'Paradise!' , '2020-07-05', 'Awesome pool and hot tub! So conveniently located and perfect for parties!' );
