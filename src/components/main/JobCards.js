import React, { useContext } from 'react'
import JobCard from './JobCard';
import { JobContext } from './JobContext';

const JobCards = () => {
    const [jobs, setJobs] = useContext(JobContext);

    return (
        <div className="job-cards d-flex w-auto">
            {jobs.map(job => (
                <JobCard
                key={job.id}
                companyDate={job.companyDate}
                companyTime={job.companyTime}
                companyJob={job.companyJob}
                companyName={job.companyName}
                companyCountry={job.companyCountry} />
            ))}
        </div>
    )
}

export default JobCards;
