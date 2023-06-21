import React from 'react'

const Book = ({ book }) => {
  return (
    <div>
    <h2>Title: {book.title} </h2>
    <h3>year:{book.year}</h3>
    <p>id: {book.id} </p>
    </div>
  );
};

// outputting list

const  Books = () => {
  const books = [
   { id: 1, title : 'Sugar Girl', year: 1992}, 
   { id: 2, title : 'Sugar Boy'} ,
   { id: 3, title : 'Sugar Mum'} ,
   { id: 4, title : 'Sugar Dad'}, 
  ];
  return (
    <div>
      <h2>Best selling books</h2>
      {books.map((book) =>{
        return <Book key = {book} book = {book} />;
      })}
    </div>
  )
}

export default Books