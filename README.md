# Di Developer  <!-- omit in toc -->


<br>

## Overview

_**Di Developer** is a personal blog about all things tech. Users are able to create an account and log in to comment or like posts. Users will also be able to delete comments that they have made._


<br>

## MVP Requirements

### Server (Back End)
- Have a RESTful JSON API.
- Build a Ruby on Rails server, exposing RESTful JSON endpoints.
- Build a database with at least 3 tables:
- There must be at least 1 association between your tables. (1:m or m:m)
- Utilize Rails to define models for interacting with the database.
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables
Note that if you choose to do Authentication, CRUD on your User table does not count toward this requirement.
### Client (Front End)
- Have a working, interactive React app, built using npx create-react-app.
- Have at least 8 separate, rendered components in an organized - - and understandable React file structure.
-Utilize functional or class React components appropriately.
-Utilize state and props in your components efficiently.
-Use only React for DOM Manipulation.
-Consume data from your Ruby on Rails API, and render that data in your components.
-Utilize React Router, for client-side routing.
-Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.
-Note that if you decide to implement Auth, your full CRUD actions must be covered amongst your non-User tables.
### Styling
- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).
- Linting
- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow camelCase, snake_case, and kebab-case convention.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes and comments are okay).


<br>

### Goals

- _Create a nicely styled, functional blog._
- _Allow users to read post without being logged in._
- _Create forms for users to make an account or log in._
- _Give users the options to comment and like posts._
- _Give users full CRUD capabilities._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _powers the application functionality/environment._ |
|   React Router   | _allows application to be navigable without having to refresh the page._ |
| Ruby | _dynamic, open source programming language that focuses on simplifying code and making it more productive._ |
|     Rails      | _server-side web application framework._ |
| Flex-box  | _A styling tool._ |

<br>

### Client (Front End)

#### Wireframes

  ## Homepage 

![Homepaeg](https://i.imgur.com/WRKKEZP.png[/img])

## Posts 

![Posts](https://i.imgur.com/p23Grr2.png[/img])

## PostDetail

![PostDetail](https://i.imgur.com/AioHaGj.png[/img])

## Login Form

![Login](https://i.imgur.com/6ss6IIe.png[/img])

## PostDetail when logged in 

![userPostDetail](https://i.imgur.com/5LibfK8.png[/img])

## Comment page 

![addComments](https://i.imgur.com/lEcZ43s.png[/img])

## Sign Up Form 

![SignUp](https://i.imgur.com/8rbHbYu.png[/img])

## Mobile Views

![loggedOut](https://i.imgur.com/4hrMtHc.png[/img])

![SignIn](https://i.imgur.com/dpNwuAE.png[/img])

![Comment / Signup](https://i.imgur.com/ZOCzWgP.png[/img])



### Component Tree

![Component Tree Sample](https://i.imgur.com/0XpTMWH.png[/img])

### Component Hierarchy


``` structure


src
|__ App.js/
|__ Main/
       |__Main.jsx
       |__Main.css
|__ components/
    |__Layout/
       |__Nav.jsx
       |__Footer.jsx
       |__Login.jsx
       |__SignUp.jsx
    |__ Nav/
       |__Nav.jsx
       |__Nav.css
    |__Footer/
       |__Footer.jsx
       |__Footer.css
    |__ Posts/
        |__ Posts.jsx
        |__ Posts.css
    |__ Login/
        |__Login.jsx
        |__Login.css
    |__ Register/
        |__Register.jsx
        |__Register.css
    |__Users/
       |__ CreateUser/
        |__ CreateUser.jsx
        |__ CreateUser.css
       |__ ShowUser/
          |__ ShowUser.jsx
          |__ ShowUser.css
       |__ UpdateUser/
          |__ UpdateUser.jsx
          |__ UpdateUser.jsx
       |__ DeleteUser/
          |__ DeleteUser.jsx
          |__ DeleteUser.css
    |__Comments/
      |__ CreateComments/
          |__ CreateComments.jsx
          |__ CreateComments.css
       |__ ShowComments/
          |__ ShowComments.jsx
          |__ ShowComments.css
       |__ UpdateComments/
          |__ UpdateComments.jsx
          |__ UpdateComments.jsx
       |__ DeleteComments/
          |__ DeleteComments.jsx
          |__ DeleteComments.css
|__ services/
    |__api-config.js
    |__auth.js
    |__posts.js
    |__users.js
    |__comments.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Posts    |    H     |   6 hrs      |   TBD      |    TBD    |
| Create comment sections |    H     |   6 hrs  |   TBD      |     TBD     |
|Create /style Nav  |    H      |  4 hrs      |   TBD       |     TBD     |
|Create/style Footer  |  L | 4hrs    |  TBD   |      TBD          |             |
|Create Login page   |  H | 4hrs        |    TBD      |  TBD     |             |
|Create sign up page |  H | 4hrs  |      TBD    |     TBD     |             |
|Add full CRUD to comments | H | 6hrs    |      TBD  |   TBD      |
| Style using css/flexbox |  H | 9hrs    |      TBD    |    TBD      |
| Build ruby on rails server | H | 6hrs | TBD | TBD |     |
| TOTAL | - | 49hrs | TBD | TBD |   |


<br>

### Server (Back End)

### ERD Model


![ERD Sample](https://i.imgur.com/HK6YqiV.png[/img])
<br>

***

## Post-MVP

- Allow users to add their own posts.
- Allow users to save posts that they like to their account.
- Allow users to choose through catergories. 
- Allow users to have the option to request a blog post subject.
  

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.