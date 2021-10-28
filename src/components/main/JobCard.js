import React from 'react'

const JobCard = () => {
    return (
        <div className="job-card d-flex">
            <div className="company-logo">
                <p>Scoot</p>
            </div>
            <div className="company-info">
                <p className="company-date">5 h ago</p>
                <span>&#183;</span>
                <p className="company-time">Full Time</p>
            </div>
            <p className="company-job">Junior Software Engineer</p>
            <p className="company-name">Scoot</p>
            <p className="company-country">Germany</p>
        </div>
    )
}

export default JobCard;
