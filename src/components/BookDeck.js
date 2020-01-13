import React from 'react';
import BookItem from "./BookItem";

class BookDeck extends React.Component {

    render(){
        return(
        <div className="book-deck">
            <div className="book-list">

                <ol className="book-grid">
                {

                    this.props.books.map((book, index) =>{
                        return <li key={index}><BookItem book={book} onShelfChange ={this.props.onShelfChange}/></li> })
                }
                </ol>
            </div>
        </div>
        )
    }
}

export default BookDeck;