import React from "react";
import { useSelector } from "react-redux";
const List = () => {
  const booksList = useSelector((state) => state.bookstore.books);
  return (
    <div>
      <h3>Books List</h3>
      <ul>
        {booksList.map((item) => (
          <li key={item.id}>{item.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
