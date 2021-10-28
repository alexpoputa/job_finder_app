import React from 'react'
import JobCard from './JobCard';

const JobCards = () => {
    return (
        <div className="job-cards d-flex w-auto">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    )
}

export default JobCards;
