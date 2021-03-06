## Welcome to French Mate!
French mate makes learning French easy and fun! Utilizing a spaced repitition algorithm in the backend to ensure that you get repeated exposure to the French words you need the most practice with. Spaced repetition is a proven learning technique that leverages dynamic intervals of time between exposure to learning materials. If there are questions that you are struggling with and get incorrect, then those questions will appear more frequently. Whereas questions that you get correct will appear less frequently. Pretty cool! We hope French Mate can help push your French knowledge to the next level!

### Demo User:
test it out with this demo user!
username: demo
password: password12

### Link to deployed app: 
[https://frenchmate.herokuapp.com](https://frenchmate.herokuapp.com)

### Link to server github repo:
https://github.com/thinkful-ei26/Barrett-RandyS-spacedRep-server.git


### Screenshots:

- Landing page:
![alt text](https://i.imgur.com/zDIMmud.png)
- Help window:
![alt text](https://i.imgur.com/VG9VARM.png)
- Game:
![alt text](https://i.imgur.com/siK1wCg.png)
- Register user:
- ![alt text](https://i.imgur.com/f5bhi4e.png)

### Tech stack:

Frontend: React<br>
State Management: Redux<br>
Server: Node with Express<br>
Database: Mongo

### Organization of code base:
Everything lives in the src folder.<br>
- src
  - actions (holds all redux action files)
  - components (holds all react components)
  - reducers (holds redux reducers)
  - stylesheets (holds all css style sheets for react components)
 - config.js (holds config vars)
 - index.js (calls ReactDOM.render, renders root App component and Provider)
 - store.js (creates redux store)
 - validators.js (holds redux-form validators)

 ## API

```
/api
.
├── /auth
│   └── POST
│       ├── /login
│       └── /refresh
├── /users
│   └── POST
│       └── /
├── /words
│   └── GET
│       ├── /:id
│   └── PUT
│       ├── /:id
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
