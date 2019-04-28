# CC8 SoloProject - API Solo Project
My first solo project during enrollment to Code Chrysalis.

### Objectives
- [x] Create a CRUD API service using Express/GraphQL, Knex, and Postgres
- [x] Use test-doubles from Mocha or Jasmine to test my code
- [x] Seed my database with interesting data
- [x] Be able to document your API endpoints for other developers to use
- [x] Create a Basic/Simple Frontend e.g. API Documentation

## Summary
I only had one weekend (two days) to create an MVP (minimum viable product).
I also have to do a 5 minute presentation of your API on Monday morning (2019/4/29).
Due to private matter, I was only able to work on this API for one day.

## Development

```
git clone https://github.com/johachi/cc8SoloProject.git
yarn install
npm run migrate
yarn knex seed:run
```

**Only run the seed files once. Running them again will break the database since foreign keys will be incorrect.**

Test can be run with 

### Running

To run the server, type the following into the console.

```
yarn dev
```

### Testing

```
yarn test
```

Test can also be done thrugh insomnia or similar, ```localhost:3000``` are the default entry point.

## API Points
Latest documentation can be found in `index.html` in the project root, or by accessing `localhost:3000` when running the server.

## Project Goal
- [x] A script that will set up and seed a database
An Express server that:
  - [x] serves up a basic HTML file that describes your API service
  - [x] has a create endpoint for adding to your database (POST)
  - [x] has a read endpoint for reading from your database (GET)
  - [x] has an update endpoint for editing to your database (PATCH/PUT)
  - [x] has a delete endpoint for deleting from your database (DELETE)

### Advanced Requirements
- [ ] Deployed on Heroku (optional)
