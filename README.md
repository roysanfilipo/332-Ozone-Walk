#  :shell: :sweat_drops: :rainbow: 332-Ozone-Walk :rainbow: :high_heel: :anchor:

![Home Page](INSERT IMAGE OF PROJECT HERE)

### :computer: Creator:

- Roy Sanfilipo
[Github](https://github.com/roysanfilipo)

## :sunrise: About:

[332-Ozone-Walk](TBD) is a single page web application that advertises the rental property located at 332 Ozone Walk in Fire Island Pines off the southern coast of Long Island, New York.

This is a simple site that allows the user to see a little of what they should expect while renting 332 Ozone Walk for a summer.

## :star: Features:
The user can:
- Navigate to to the main page to see an image of the house and a list of buttons
- Click a button to see photos of the house
- Click a button to see features the house has to offer
- Click a button to find contact information
- Click a button to see reviews about a house, add a review (only admin can edit or delete the review)

## :wrench: :nut_and_bolt: :hammer: The Build:
### Technologies:
- TBD

## :sun_with_face: :full_moon_with_face: My Timeline:
| Day           | Tasks         |
| ------------- |:-------------:|
| Friday 7/10    | Create Github Repo, Start README, Project Idea, User Stories, Wireframe |
| Saturday 7/11      | Research NERD stack and React Router and decide!  |
| Sunday 7/12      | Re-thinking everything and committing to PHP/SQL/ReactJS/AWS |
| Monday 7/13     | Figured out hot to toggle the Guestbook button and maintain functionality |
| Tuesday 7/14      | Implemented About, Photos, Features, and Contact buttons |
| Wednesday 7/15      | Learned how to use emailJS and implemented with the sendEmail function in contact class |
| Thursday 7/16      | Deployed to Heroku and tested everything to make sure it was working.  |
| Friday 7/17      | Added Nav class for nav buttons and moved toggle functions to the App class. Started to work with Materialize |
| Saturday 7/18      | Learned basic Adobe Lightroom to edit photos and added them to the photos class. Worked on Materialize css and site responsiveness |
| Sunday 7/19      | Worked on styling and spacing of photos. Added styling to the footer. Fixed styling on the forms. |
| Monday 7/20      | TBD |
| Tuesday 7/21      | TBD |


## :dancer: Wins:
- TBD

## :sweat: Challenges:
- TBD

## :blue_book: Sources:
- Materialize Framework
[MaterializeCSS](https://materializecss.com/)
- Instagram Logo
[icons8](https://img.icons8.com/)


## Creating my database and table locally for testing:

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
