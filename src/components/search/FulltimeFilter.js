import React from 'react'

const FulltimeFilter = ({ setFulltime, fulltime }) => {
    return (
        <div className="fulltime-filter search-component h-100 d-flex">
            <label>
                <input 
                  type="checkbox"
                  checked={fulltime}
                  onChange={() => {
                    setFulltime(!fulltime)
                }}
                />
                Full Time Only
            </label>
        </div>
    )
}

export default FulltimeFilter;
