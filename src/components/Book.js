import React from 'react'

// Book class to create individual Book component

class Book extends React.Component {
	state = {
	}

	render() {

		const { book, currentShelf, onChangeShelf } = this.props

		let onSelectChange = (event) => { // On Select change, trigger onChangeShelf function
			onChangeShelf(book, event.target.value)
		}
		let thumbnail
		if (book.imageLinks) { // Check thumnail if undefinied, showing dummy thumbnail
			thumbnail = book.imageLinks.thumbnail
		} else {
			thumbnail = 'https://dummyimage.com/128x192/A0A0A0/FFFFFF&text=Missing+Thumbnail'
		}

		return (
			<li>
				<div className='book'>
					<div className='book-top'>
						<div className='book-cover' style={{ 
							width: 128, 
							height: 192, 
							backgroundImage: `url(${thumbnail})` 
						}}></div>
						<div className='book-shelf-changer'>
							<select onChange={onSelectChange} value={currentShelf}>
								<option value='move' disabled>Move to...</option>
								<option value='currentlyReading'>Currently Reading</option>
								<option value='wantToRead'>Want to Read</option>
								<option value='read'>Read</option>
								<option value='none'>None</option>
							</select>
						</div>
					</div>
					<div className='book-title'>{book.title}</div>
					<div className='book-authors'>{book.authors === undefined ? 'Unknown Author' : book.authors}</div>
				</div>
			</li>
		)
	}
}

export default Book