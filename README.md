# Expensify

## General Information
This project will allow users to view, add, edit, and delete cash expenses in a searchable and filterable data table. 

## Technologies
This project uses the following technologies:
* ***React*** and ***React Router*** for the frontend
* ***Express*** and ***Node*** for the backend
* ***Real-time Firebase*** for the database
* ***Redux*** for state management
* ***Axios*** for HTTP client requests to backend 
* ***React-dates*** for date picker
* ***React-modal*** for modal
* ***React-chartjs-2*** for chart
* ***Styled Components*** for component level styles
* ***Webpack*** for module bundling of JS and CSS files
* ***Babel*** for JS transpiler to convert ES6+ code to ES5
* ***Postman*** for testing API routes 

## Configuration

### Firebase
Make sure to add your own firebase keys (`FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_DATABASE_URL`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, and `FIREBASE_MEASUREMENT_ID`) in both `.env.development` and `.env.test` respectively. 

## Quick Start
To run this project, install dependencies for server and client
`npm install`

Run Webpack
`npm run build:dev`

Run Server
`npm run start`

