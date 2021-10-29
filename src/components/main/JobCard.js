import React from 'react'

const JobCard = ({ companyDate, companyTime, companyJob, companyName, companyCountry }) => {
    return (
        <div className="job-card d-flex">
            <div className="company-logo">
                <p>Scoot</p>
            </div>
            <div className="company-info">
                <p className="company-date">{companyDate}</p>
                <span>&#183;</span>
                <p className="company-time">{companyTime}</p>
            </div>
            <p className="company-job">{companyJob}</p>
            <p className="company-name">{companyName}</p>
            <p className="company-country">{companyCountry}</p>
        </div>
    )
}

export default JobCard;
