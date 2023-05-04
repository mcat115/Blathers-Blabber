# Blathers' Blabber

Welcome to Blathers' Blabber! Here you'll find the best animal ratings in town! Come one, come all, and see all our amazing animals on display. Then rate them. Wahoo!

Blathers is a character from a popular video game Animal Crossing by Nintendo. In the game, he owns a museum where he collects and researches various critters and wildlife.

Help Blathers explore the local wildlife and collect data for his museum! With this app, you can add an animal to be reviewed, leave a review for an existing animal,
and upvote/downvote a review to say whether it was helpful or not.

This app is built using React on Rails and Postgres.

# Instructions to Run App Locally
Dependencies:
1. Ruby (greater than v2.7.3)
2. Postgres (greater than v13.2)

```
git clone https://github.com/Jgorin/Blathers-Blabber.git
yarn install
bundle install
bundle exec rake db:create
```
In a separate terminal window, run `bundle exec rails s`.
In another terminal window, run `yarn run start`.

If you are using Windows or Linux, add these lines in the database.yml file under both the development and test code blocks

```
username: postgres
password: <your database password here>
host: localhost

```

# TODO
Future plans for the app:
1. Search functionality on the animal index page
2. Ability to edit a user on a user profile page
3. Adding comments to reviews
4. Edit existing animals and reviews

NOTE: Be sure to merge the latest from "main" before making a pull request!
