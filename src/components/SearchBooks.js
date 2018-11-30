import React from 'react'
import Book from './Book.js'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'

// SearchBooks class to list queries books

class SearchBooks extends React.Component {
	state = {
		query: ''
	}


    componentWillUnmount(){ // Reset search query
        this.props.onSearch('')
    }

	updateQuery = (query) => {
		this.props.onSearch(query.trim())
	}

	render() {
		const { searchedBooks, onChangeShelf } = this.props

		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<div className='close-search'><Link to='/'>Close</Link></div>
					<div className='search-books-input-wrapper'>
							<Debounce time="800" handler="onChange">
							<input
								type="text"
								placeholder="Search by title or author"
								onChange={(event) => this.updateQuery(event.target.value)}
							/>
							</Debounce>
					</div>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid'>
						{searchedBooks.map((book) => (
							<Book 
								key={book.id}
								book={book}
								currentShelf={book.shelf}
								onChangeShelf={onChangeShelf}
							/>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks