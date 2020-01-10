import React from 'react';
import nobookcover from '../images/nobookcover.png';


class BookItem extends React.Component {

    render(){
        const coverImg = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : nobookcover;
        const title = this.props.book.title ? this.props.book.title : 'No title available';
        return(
            <div className="book_item">

                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${coverImg})` }}></div>
                <div className="book-shelf-changer" >
                    <select  onChange={(e) => {this.props.onShelf(this.props.book,e.target.value)}}
                             defaultValue={typeof(this.props.book.shelf) != 'undefined' ? this.props.book.shelf : 'none'}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                    </select>
                </div>

                <p className="book-title">{title}</p>
                <p className="book-author">{this.props.book.authors}</p>

            </div>
        )
    }
}

export default BookItem;