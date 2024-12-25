import React, { useState } from "react";
function Search(props){
    const [name,setName]=useState("");
    function handleChange(e){
        setName(e.target.value);
    }
    function handleSearch(){
        props.onSearch(name)
        setName('')
    }
    return <div>
        <input onChange={handleChange} type="text" placeholder="Search by name.." value={name}/>
        <button onClick={handleSearch}>Search</button>
    </div>
}
export default Search;