import React from 'react'
import Book from './Book.js'


class BookShelf extends React.Component {
	state = {
	}

	render() {
		const { books, bookShelfTitle, bookShelfType, onChangeShelf } = this.props

		return (
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>{bookShelfTitle}</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{books.map((book) => (
							<Book 
								key={book.id}
								book={book}
								currentShelf={bookShelfType}
								onChangeShelf={onChangeShelf}
							/>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default BookShelf