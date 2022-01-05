import React from 'react';
import Book from './Book';

const book_lib = [
    {
        name: "React",
        img_url: "https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg",
        desc: "This is an Intro to react",
        price: 49
    },
    {
        name: "Computer Vision",
        img_url: "https://m.media-amazon.com/images/I/61TKTkmD4FL._AC_UY327_FMwebp_QL65_.jpg",
        desc: "This is an Intro to Computer vision",
        price: 100
    },
    {
        name: "Will",
        img_url: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
        desc: "This is a personal book",
        price: 49
    }
]

function BookList(){

    const newbooklist = book_lib.map(
    bk => <Book img_url={bk.img_url} name={bk.name} desc={bk.desc} price={bk.price}/>
    );
    return(
        <div>
            <h1>Book List</h1>
            {/*<Book img_url="https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY327_FMwebp_QL65_.jpg" name="Harry potter" desc="This is description" price="51"/>*/}
            {newbooklist}
        </div>

    );
}

export default BookList;