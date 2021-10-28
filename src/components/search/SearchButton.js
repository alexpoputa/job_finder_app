import React from 'react';

const SearchButton = () => {
    return (
        <div className="search-button search-component h-100 d-flex">
            <button onClick={() => console.log("hello")}>
                Search
            </button>
        </div>
    )
}

export default SearchButton;
