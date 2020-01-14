import React from 'react';
import nobookcover from '../images/nobookcover.png';


class BookItem extends React.Component {

    /*handleShelfValue = (booksList, book) =>{
        console.log(booksList);
         for(let bookItem of booksList){

             if(bookItem.id === book.id){
                 book.shelf = bookItem.shelf;
                 console.log(typeof(book.shelf));
             } else if(typeof(book.shelf) === 'undefined'){
                 book.shelf ='none';
             }
         }

        return book.shelf;

    };*/

    render(){
        const coverImg = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : nobookcover;
        const title = this.props.book.title ? this.props.book.title : 'No title available';
        return(
            <div className="book_item">

                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${coverImg})` }}></div>
                <div className="book-shelf-changer" >

                    <select  onChange={(e) => {this.props.onShelfChange(this.props.book,e.target.value)}}
                             value={this.props.book.shelf}>
                        <option value="change" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>

                <p className="book-title">{title}</p>
                <p className="book-author">{this.props.book.authors}</p>

            </div>
        )
    }
}

export default BookItem;