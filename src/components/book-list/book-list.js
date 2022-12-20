import React, {Component} from 'react';
import BookListItem from "../book-list-item/book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {fetchBooks,bookAddedToCart} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";


const  BookList =({books,onAddedToCar})=>{
    return (
        <ul className='book-list'>
            {
                books.map((book)=>
                    <li key={book.id} >
                        <BookListItem book={book} onAddedToCar={()=>onAddedToCar(book.id)} />
                    </li>
                )
            }
        </ul>
    );
}

class BookListContainer extends Component {

    componentDidMount() {

       this.props.fetchBooks();


    }



    render() {
        const {books,loading,error,onAddedToCar} =this.props
        if(loading){
            return <Spinner/>
        }

        if(error){

            return <ErrorIndicator/>
        }

        return <BookList books={books}  onAddedToCar={onAddedToCar}/>
    }
}


const mapStateToProps = ({bookList:{books,loading,error}}) =>{
  return {books,loading,error}
}
const mapDispatchToProps = (dispatch,{bookstoreService}) =>{
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCar:(id)=>dispatch(bookAddedToCart(id))
    }
}
export default compose(
    withBookstoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(BookListContainer);