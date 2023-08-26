import { useRef } from "react";

export const Search = ({fn}) =>{

    const artist= useRef();
    return (
    <>
    <label>Artist Name</label>
    <center>
    <input ref = {artist} type ='text' className='form-control'placeholder="Search Artist song"/>
    <button className="btn btn-primary" onClick={()=>{fn(artist.current.value);}}>Search</button>
    </center>
    </>
    )
}