import React from 'react'

 const SearchBar = () => {
    return (
        <div className="search-bar search-component h-100 d-flex">
            <i className="fas fa-search"></i>
            <input type="text" className="h-100" placeholder="Filter by title, companies, expertise" />
        </div>
    )
}

export default SearchBar;
