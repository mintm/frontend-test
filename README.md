# Aircall.io application skeleton

## About
Here is an application skeleton using [aircall.io](https://aircall.io) test API.

## Todo
- [X] (tech) As a developer, I want to install and run the application on local
  - [X] Update and stick packages
  - [X] Add install and run commands
- [X] (tech) As a team, we want to write and to push some codes
  - [X] Create GitHub repository
  - [X] Define code conventions
  - [X] Release v1.0.1
- [ ] As an user, I want to see the list of calls
  - [X] Fetch data using the API
  - [ ] Display the list
  - [ ] Show a loader during fetch
  - [ ] Show an error if API call failed
- [ ] As an user, I want to see details of a call
  - [ ] Fetch data using the API
  - [ ] Display the list
  - [ ] Show a loader during fetch
  - [ ] Show an error if API call failed
- [ ] As an user, I want to archive a call
  - [ ] Call API to archive a call
  - [ ] Call API to reset the list of calls
  - [ ] Show success messages
  - [ ] Show an error if API call failed
- [ ] As an user, I want to use the application online

## Requirements
- [Node.js](https://nodejs.org/) (see the recommended version in the package.json, tips: use [nvm](https://github.com/creationix/nvm))
- [npm](https://nodejs.org/) (the latest available version is recommended)

## commands

### Install
```sh
make install
```

### Tests
```sh
make unit

```

### Run
```sh
make start
```

Open [http://localhost:8081/](http://localhost:8081/) in a browser
