import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
const List = () => {
    const booksList=useSelector((state)=>state.bookstore.books)
    return (
        <div>
            <h3>Books List</h3>
            {booksList.map(item=><li key={item.id}>{item.Name}</li>)}
        </div>
    )
}

export default List
