<h1>Welcome to itunes-search-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-15.6.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-7.11.1-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

This is a full-stack web application, created with React and Express, that interfaces with the iTunes Search API. The code for interfacing with the third-party API is handled by the back-end of the application. 

A user can enter a search term and also select the type of media they wish to search for. In addition to this, the user can create a list of their favourite content and remove items at free will. 

![iTunes Search App](https://github.com/ChanBos/iTunes-Search-App/blob/master/client/public/images/iTunes%20Search%20App.jpg)

### 🏠 [Deployed Application](https://itunes-search-app-heroku.herokuapp.com/)

## Table of Contents:

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Running Tests](#running-tests)
- [Application Security](#application-security)
- [Handling of API Keys](#handling-of-api-keys)
- [Credits](#credits)
- [Author Details](#author-details)


## Prerequisites

- node 15.6.0
- npm 7.11.1

## Installation

To run this project, do the following:

1. Select the directory that you wish to clone the project into. Example below:

```sh
cd folder/to/clone-into/`
```

2. Enter git clone [repository_URL] into the terminal or command prompt. Code and link below:

```sh
gh repo clone ChanBos/iTunes-Search-App`
```

3. If you want a different folder name, simply specify it as the last parameter. Example below:

```sh
gh repo clone ChanBos/iTunes-Search-App other-name`
```

This will create a new directory which will initialise a .git directory within it, pulling all of the data from this project. You will find all of the files and folders in this directory, enabling you to use and edit it to your liking.

4. Navigate to this directory from the command line interface.

```sh
cd "C:\Users\user\...
```

5. Navigate to both the server and the client's directories in the command line interface and type the following to install all of the necessary node modules:

```sh
npm install
```

6. In the command line interface respectively type the following to run the client and server in development mode:

```
npm start
```

7. Open the server and the client to view the application in the browser. The server runs on http://localhost:8000/search and the client on http://localhost:3000.

## Usage Instructions

This application features a landing page that displays an input area, dropdown menu and search button. A search query may be added to the input section and the type of media may be selected using the dropdown menu. The media types that are available are as follows:

1. CATEGORIES: All Tracks
2. MUSIC: Songs
3. MUSIC VIDEOS: Music Videos
4. APPS: Software
5. EBOOKS: eBooks
6. AUDIO BOOKS: Audio Book
7. PODCASTS: Podcasts
8. MOVIES: Movies
9. TV SHOWS: TV Seasons
10. SHORT FILMS: Short Films

Once the selection has been made a user can click on the search button. This will return the results as a list of cards, limited to 28 results. Should these be available, the cards will display the media artwork, track name, artist name, an integrated preview option (with added controls) and a "More Details" button should the user wish to visit the Apple page for further information. These results will be added to local storage. The footer of the page has a button that a user may use to conveniently navigate to the top of the page.

In addition to this, the result cards also feature an button option to add a result as a favourite. Once this button is clicked the result item will be added to the Favourites page and a modal will display, confirming success. When navigating to the Favourites page the result item will display as a card list on the page with all of the added features as listed above, with the addition of a "Delete" button.

Once the delete button is clicked a modal will appear confirming success, the page will reload and the result item will no longer display.

With regards to the navigation bar, it has been created to only display the relevant navigation item (not the page that the user is currently visiting).

## Running Tests

Four tests have been created for this application. Two in the backend and two for the client. They determine the following:

- Backend (Testing with Mocha and Chai):
1. Whether the server communicates with client.
2. Whether the server gets search requests.

- Client (Testing with Jest and the React Test Renderer):
1. The Axios GET functionality.
2. Whether the application renders without crashing. This is a snapshot test that compares it to a reference snapshot file stored alongside the test.

In order to run these tests navigate to both the server and the client's directories in the command line interface and type the following:

```sh
npm test
```

## Application Security

To increase the security of the application, Helmet.js has been utilized. Helmet is a middleware for Express applications. It sets many different HTTP headers and aims to make applications more secure.

Adding these headers can help avoiding attacks such as Cross-Site-Scripting (XSS), clickjacking, etc.

## Handling of API Keys

No API keys were necessary to access the API. Should you ever encounter an API that does require a key, this should be secured.

This can be done by doing the following:
1. Creating an .env file in the root of your project, outside of your src folder.
2. Add the key to this file, the name of the variable starting with REACT_APP_.
3. The .env file should then be added to the .gitignore file. This file stipulates what files not to upload.

Click here for more information: https://dev.to/eprenzlin/env-gitignore-and-protecting-api-keys-2b9l

## Credits

- Ridhaa Cupido - https://github.com/ridhaaDev
- HyperionDev - https://www.hyperiondev.com/
- Stack Overflow - https://stackoverflow.com/

## Author Details

👤 **Chanelle Bösiger**

* GitHub: [@ChanBos](https://github.com/ChanBos)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
