import React from 'react'

const LocationFilter = ({ setLocation }) => {

    return (
        <div className="location-filter search-component h-100 d-flex">
            <i className="fas fa-map-marker-alt"></i>
            <input 
                type="text" 
                className="h-100" 
                placeholder="Filter by location..." 
                onChange={(e) => {
                    setLocation(e.target.value);
                }} 
            />
        </div>
    )
}

export default LocationFilter;
