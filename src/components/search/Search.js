import React from 'react'
import SearchBar from './SearchBar';
import LocationFilter from './LocationFilter';
import FulltimeFilter from './FulltimeFilter';
import SearchButton from './SearchButton';

const Search = () => {
    return (
        <div className="search d-flex">
            <SearchBar />
            <LocationFilter />
            <FulltimeFilter />
            <SearchButton />
        </div>
    )
}

export default Search;
