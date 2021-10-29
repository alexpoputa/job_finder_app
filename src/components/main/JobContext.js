import React, { useState,  createContext } from 'react'
import data from '../../data/data.json';

export const JobContext = createContext();

export const JobProvider = (props) => {

    const [jobs, setJobs] = useState(data);

    return (
        <div>
            <JobContext.Provider value={[jobs, setJobs]}>
                {props.children}
            </JobContext.Provider>
        </div>
    )
}
