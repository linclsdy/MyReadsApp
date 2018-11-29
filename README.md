# MyReads App Project

This is a bookshelf app in which a part of project is created by the Udacity Front-End Developer Nanodegree and API server is provided. In this project, it aims to use React to build the application. Users are allowed to select and categorize the books into Currently Reading, Want to Read or Read. 


## How to Run

1. [Download](https://github.com/linclsdy/MyReadsApp/archive/master.zip) or [Clone](https://github.com/linclsdy/MyReadsApp.git) the Repository.
2. Install all project dependencies with `npm install`
3. Start the development server with `npm start`
4. Then, the app can be seen at: `localhost:3000` 


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


### `getAll`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read", "none"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`
* query: `<String>`
* maxResults: `<Integer>` It is because of nature of the backend server, search results are capped at 20 book objects.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Code Dependencies
* [Project React MyReads - Starter Code](https://github.com/udacity/reactnd-project-myreads-starter)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://www.npmjs.com/package/react-router-dom)
* [BooksAPI](src/BooksAPI.js) (Provided by Udacity)


