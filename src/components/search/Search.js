import React, { useState } from 'react'
import SearchBar from './SearchBar';
import LocationFilter from './LocationFilter';
import FulltimeFilter from './FulltimeFilter';
import SearchButton from './SearchButton';

const Search = () => {

    const [filter, setFilter] = useState('');
    const [location, setLocation] = useState('');
    const [fulltime, setFulltime] = useState(false);

    return (
        <div className="search d-flex w-auto">
            <SearchBar setFilter={setFilter}/>
            <LocationFilter setLocation={setLocation} />
            <FulltimeFilter setFulltime={setFulltime} fulltime={fulltime} />
            <SearchButton filterName={filter} locationName={location} fulltime={fulltime} />
        </div>
    )
}

export default Search;
