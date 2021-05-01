import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addbookaction} from '../Redux/Actions/Actions'
const Additem = () => {
    const [data, setData]=useState("")
    const dispatch = useDispatch()
    const handlesubmit=(e)=>{
        e.preventDefault();
        let input=e.target.userInput.value
        dispatch(addbookaction(input))
        e.target.userInput.value=""
    }
    return (
        <div>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <input name="userInput"></input>
            <button>Add</button>
            </form>
        </div>
    )
}

export default Additem