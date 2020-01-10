import React from 'react';
import BookItem from "./BookItem";

class BookDeck extends React.Component {

    render(){
        return(
        <div className="book-deck">
            <div className="book-list">
                <ol className="book-grid">
                {
                    this.props.books.map((book) =>{
                        return <li><BookItem book={book} onShelf ={this.props.onShelf}/></li> })
                }
                </ol>
            </div>
        </div>
        )
    }
}

export default BookDeck;