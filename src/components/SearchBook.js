import React from 'react';
import * as BooksAPI from '../BooksAPI';
import BookItem from './BookItem';

class SearchBook extends React.Component {
    state = {
        query: '',
        newBooks: []
    }

    updateQuery =(query) =>{
        this.setState (()=> ({
            query: query.trim()
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
            <input type="text" placeholder="Search title"
                   value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)} />
                <div className="book-list">
                    <ol className="book-grid">
                        {this.state.newBooks.map(book => (
                            <li><BookItem book={book} onShelf ={this.props.onShelf} /></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;