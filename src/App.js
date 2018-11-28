import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf(book, shelf) { // changeShelf function calls API to shelf for the book
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    })
  }


  render() {

    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks
              currentlyReadingList={this.state.books.filter(book => book.shelf === 'currentlyReading')}
              wantToReadList={this.state.books.filter(book => book.shelf === 'wantToRead')}
              readList={this.state.books.filter(book => book.shelf === 'read')}
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)
              }}
            />
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks
              noneList={this.state.books.filter(book => book.shelf === 'none')}
              onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)
              }}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
