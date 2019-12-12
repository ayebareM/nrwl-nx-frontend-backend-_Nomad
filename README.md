# Noma

This project was generated using [Nx](https://nx.dev).
🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

Nomad is a platform to help users with global travel and accommodation.

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are plugins added to this workspace:

- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`

## PROJECT REQUIREMENTS
- Node.js 
- PostgreSQL 
- Sequelize
- Angular-cli
- @nrwl/angular
- @nrwl/express
- @nrwl/schematics

## Project setup
Clone this repository using 
```
https://github.com/ayebareM/nrwl-nx-frontend-backend_Nomad.git

```

Note: When using Nx, you can create multiple applications and libraries in the same workspace.


## Development server

Run `nx serve nomad-backend` for a dev server. Navigate to http://localhost:3333/. The app will automatically reload if you change any of the source files.

Similary run `nx serve nomad-frontend` to serve the frontend application(Angular). Navigate to  http://localhost:4200/.

## Build

Run `nx build <app-name>` to build the project. 

## Running unit tests

Run `nx test <app-name>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e <app-name>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

You can visit the [Nx Documentation](https://nx.dev) to learn more.
