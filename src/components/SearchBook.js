import React from 'react';
import * as BooksAPI from '../BooksAPI';

import { Link } from 'react-router-dom';
import BookDeck from "./BookDeck";


class SearchBook extends React.Component {
    state = {
        query: '',
        newBooks: []
    }

    updateQuery =(query, myBooks) =>{
        this.setState (()=> ({
            query: query
        }))

        if (query) {

        // logic to maintain shelf value of book item in Search page & main page in sync

            BooksAPI.search(query.trim(), 20).then(books => {
               const newBookList= books.map((book) => {
                   const myBook = myBooks.filter((myBook) => (myBook.id === book.id))[0]
                   book.shelf = myBook ? myBook.shelf : 'none'
                   return book
               })
                console.log(newBookList);
                newBookList.length > 0
                    ? this.setState({ newBooks: newBookList })
                    : this.setState({ newBooks: [] });
            });

        } else this.setState({ newBooks: []});

    }

    render(){

        return(
            <div>
            <div className='search-body'>

                <Link to="/" className='back'> </Link>
                <input type="text" placeholder="Search title" className='search-book'
                       value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value, this.props.booksList)} />
            </div>

            <BookDeck
             books={this.state.newBooks}
             onShelfChange ={this.props.onShelfChange}
            />

            </div>
        )
    }
}

export default SearchBook;