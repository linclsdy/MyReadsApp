import React from 'react'
import BookShelf from './BookShelf.js'
import { Link } from 'react-router-dom'


class ListBooks extends React.Component {
	state = {
	}

	render() {
		const { currentlyReadingList, wantToReadList, readList, onChangeShelf } = this.props
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<BookShelf
							books={currentlyReadingList}
							bookShelfTitle='Currently Reading'
							bookShelfType='currentlyReading'
							onChangeShelf={onChangeShelf}
						/>
						<BookShelf
							books={wantToReadList}
							bookShelfTitle='Want to Read'
							bookShelfType='wantToRead'
							onChangeShelf={onChangeShelf}
						/>
						<BookShelf
							books={readList}
							bookShelfTitle='Read'
							bookShelfType='read'
							onChangeShelf={onChangeShelf}
						/>
					</div>
				</div>
				<div className='open-search'>
					<Link to='/search'>Add a book</Link>
				</div>
			</div>

		)
	}
}

export default ListBooks