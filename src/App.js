import React from 'react';
import './App.css';
import BookDeck from './components/BookDeck';
import * as BooksAPI from './BooksAPI';
import SearchBook from './components/SearchBook';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';


class  App extends React.Component {
    constructor(){
        super();
        this.state = {
            books: []
        }
        this.onShelfChange = this.onShelfChange.bind(this);
    }

    onShelfChange=(book, val) =>{
        let newBook = book;
        BooksAPI.update(newBook,val).then(response =>{
            newBook.shelf = val;
            this.setState(prevState => {
                books : prevState.books.filter(book => book.id !== newBook.id).concat(newBook)

            })
                if(window.location.pathname === '/search'){
                    console.log('you are currently in '+window.location.pathname);
                }else{
                    window.location.reload(false);
                }
        });
      //
    }

    render() {
        const  booksList  = this.state.books;


        return (
            <div>
             <Route exact path="/" render={() => (
                 <div className="App">
                     <div className="book-list">
                         <div className="app-top" >
                             <h1 className="app-title">My Reads</h1>
                             <Link to="/search" className="sea" ></Link>
                         </div>

                         <h3>Currently Reading </h3>
                         <BookDeck onShelfChange = {this.onShelfChange} booksList ={booksList} books={this.state.books.filter(
                             (book) => book.shelf === "currentlyReading"
                         )}/>
                         <h3>Want to Read</h3>
                         <BookDeck onShelfChange = {this.onShelfChange} booksList ={booksList} books={this.state.books.filter(
                             (book) => book.shelf === "wantToRead"
                         )}/>
                         <h3>Read</h3>
                         <BookDeck onShelfChange = {this.onShelfChange} booksList ={booksList} books={this.state.books.filter(
                             (book => book.shelf === "read")
                         )}/>

                     </div>
                 </div>
             )} />
                <Route path="/search" render={() => (
                        <SearchBook booksList ={booksList} onShelfChange={this.onShelfChange}/>
                )} />

            </div>
        )
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }
}

export default App;
