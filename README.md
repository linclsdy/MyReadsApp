# MyReads Project

This is a bookshelf app which allows users to select and categorize the books you have read, or reading or want to read.
The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## How to Run

To get started developing right away:

1. [Download](https://github.com/linclsdy/MyReadsApp/archive/master.zip) or [Clone](https://github.com/linclsdy/MyReadsApp.git) the Repository.
2. Install all project dependencies with `npm install`
3. Start the development server with `npm start`
4. Then, the app can be seen at: `localhost:3000` 

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to search.
├── package.json
├── public
│   ├── favicon.ico # React Icon
│   └── index.html 
├── src
│   ├── App.css 
│   ├── App.js # This is the root of the app. 
│   ├── App.test.js # Used for testing.
│   ├── components
│   │   ├── Book.js # Book Component
│   │   ├── BookShelf.js # BookShelf Component to contain Book
│   │   ├── ListBooks.js # ListBooks Component to list BookShelf
│   │   └── SearchBooks.js # SearchBook Component
│   ├── icons
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.css # Global styles. 
│   ├── index.js # It is used for DOM rendering only.
│   └── utils
│       └── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
└── yarn.lock
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

