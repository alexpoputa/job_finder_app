import React, { useContext } from 'react';
import { JobContext } from '../main/JobContext';

const SearchButton = () => {

    const [jobs, setJobs] = useContext(JobContext);

    const changeState = () => setJobs( jobs.map(job => job.companyName === "Scoot" ? {...job, companyName:"Pepsi"} :  job.companyName === "Pepsi" ? {...job, companyName: "Scoot"} : job) )

    return (
        <div className="search-button search-component h-100 d-flex">
            <button onClick={changeState}>
                Search
            </button>
        </div>
    )
}

export default SearchButton;
