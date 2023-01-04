import React from 'react';

const Experience = ({ prevStep, nextStep, handleChange, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div>
            <h1>Experience Details</h1>

            <label> Experience 1
                <input type="text" placeholder="experienceOrganisation1" value={values.experienceOrganisation1} onChange={handleChange('experienceOrganisation1')} />
                <input type="text" placeholder="experiencePosition1" value={values.experiencePosition1} onChange={handleChange('experiencePosition1')} />
                <input type="text" placeholder="experienceDuration1" value={values.experienceDuration1} onChange={handleChange('experienceDuration1')} />
                <input type="text" placeholder="experienceDescription1" value={values.experienceDescription1} onChange={handleChange('experienceDescription1')} />
            </label>

            <label> Experience 2
                <input type="text" placeholder="experienceOrganisation2" value={values.experienceOrganisation2} onChange={handleChange('experienceOrganisation2')} />
                <input type="text" placeholder="experiencePosition2" value={values.experiencePosition2} onChange={handleChange('experiencePosition2')} />
                <input type="text" placeholder="experienceDuration2" value={values.experienceDuration2} onChange={handleChange('experienceDuration2')} />
                <input type="text" placeholder="experienceDescription2" value={values.experienceDescription2} onChange={handleChange('experienceDescription2')} />
            </label>

            <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button>
        </div>
    )
}

export default Experience