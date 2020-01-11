import React from 'react';
import * as BooksAPI from '../BooksAPI';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';


class SearchBook extends React.Component {
    state = {
        query: '',
        newBooks: []
    }

    updateQuery =(query) =>{
        this.setState (()=> ({
            query: query
        }))

        if (query) {
            BooksAPI.search(query.trim(), 20).then(books => {
                books.length > 0
                    ? this.setState({ newBooks: books })
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
                       value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)} />
            </div>

                <div className="book-list">
                    <ol className="book-grid">
                        {this.state.newBooks.map(book => (
                            <li><BookItem book={book} onShelfChange ={this.props.onShelfChange} /></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;