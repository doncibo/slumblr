//contains mid nav component, ie search bar
import React from 'react';

function MiddleNav(){
    const handleSearch = (e) => {
        console.log(e.target.value)
    }
    return(
        <div className="middlenav">
            <input id="search" placeholder="Search Slumblr" onChange={handleSearch}></input>
        </div>
    )
}

export default MiddleNav;
