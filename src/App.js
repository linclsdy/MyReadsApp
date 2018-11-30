import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchedBooks: []
  }

  async componentDidMount() { // Use async + await
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }


  changeShelf = (book, shelf) => { // changeShelf function calls API to shelf for the book
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf 
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  updateQuery = (query) => {
    if(query) {
        BooksAPI.search(query).then((searchedbooks) => {
          if(searchedbooks.length) {
            searchedbooks.forEach((book, index) => {
              let myShelfBook = this.state.books.find((b) => b.id === book.id);
              book.shelf = myShelfBook ? myShelfBook.shelf : 'none'
              searchedbooks[index] = book // Set the bookshelf to correct type
            })

          this.setState({ searchedBooks: searchedbooks })
        }
      })
    } 
    else {
      this.setState({ searchedBooks: [] })
    }
  }

  filter = books => shelf => books.filter(book => book.shelf === shelf)

  render() {
    const filterBy = this.filter(this.state.books)

    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks
              currentlyReadingList={filterBy('currentlyReading')}
              wantToReadList={filterBy('wantToRead')}
              readList={filterBy('read')}
              onChangeShelf={this.changeShelf}
            />
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks
              searchedBooks={this.state.searchedBooks}
              onSearch={this.updateQuery}
              onChangeShelf={this.changeShelf}
            />
          )}/>
      </div>
    )
  }
}

export default BooksApp
