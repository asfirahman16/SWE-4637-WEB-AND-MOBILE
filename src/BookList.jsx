import React from 'react';
import Book from './Book';


function BookList(){

    return(
        <div>
            <h1>Book List</h1>
            <Book img_url="https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg" name="Harry potter" desc="This is description" price="51"/>
        </div>

    );
}

export default BookList;