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
- [X] As an user, I want to see the list of calls
  - [X] Fetch data using the API
  - [X] Display the list
  - [X] Show a loader during fetch
  - [X] Show an empty message if no call
  - [X] Show an error if API call failed
- [X] As an user, I want to see details of a call
  - [X] Fetch data using the API
  - [X] Display the list
  - [X] Show a loader during fetch
  - [X] Show an error message if call not exist
  - [X] Show an error if API call failed
- [X] As an user, I want to use the application online
- [ ] Bonus: As an user, I want to archive a call
  - [X] Call API to archive a call
  - [X] Show a toggle to archive a call
  - [ ] Archive a call work
    - [ ] Request to @aircall.io: Always filter is_archived from the list
    - [ ] Question to @aircall.io: Due to replication delay, is there a way to sticky to the master backend?
  - [ ] Call API to reset all archived called
  - [ ] Show a button to reset all archived calls
  - [ ] Reset all archived calls work

## Requirements
- [Node.js](https://nodejs.org/) (see the recommended version in the package.json, tips: use [nvm](https://github.com/creationix/nvm))
- [npm](https://nodejs.org/) (the latest available version is recommended)

## Commands

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
