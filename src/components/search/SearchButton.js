import React, { useContext } from 'react';
import { JobContext } from '../main/JobContext';
import data from '../../data/data.json';

const SearchButton = ( { filterName, locationName, fulltime } ) => {

    const [jobs, setJobs] = useContext(JobContext);

    const filterCards = () => {
       
            let filteredNames = data.filter(job => {
                if(job.companyName.toLowerCase().includes(filterName.toLowerCase())){
                    return job;
               }
            })

            let filteredLocations = filteredNames.filter(job => {
                if(job.companyCountry.toLowerCase().includes(locationName.toLowerCase())){
                    return job;
               }
            })

            let filteredJobs = filteredLocations.filter(job => {
                if(fulltime){
                    return job.companyTime === "Full Time";
               }else {
                   return job;
               }
            })

            setJobs(filteredJobs);
    }

    return (
        <div className="search-button search-component h-100 d-flex">
            <button onClick={filterCards}>
                Search
            </button>
        </div>
    )
}

export default SearchButton;
