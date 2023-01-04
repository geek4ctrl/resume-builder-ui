import React from 'react';

const Education = ({ prevStep, nextStep, handleChange, values }) => {

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
            <h1>Education Details</h1>

            <label> College/University
                <input type="text" placeholder="College/University" value={values.college} onChange={handleChange('college')} />
            </label>
            <label> Qualification
                <input type="text" placeholder="collegeQualification" value={values.collegeQualification} onChange={handleChange('collegeQualification')} />
            </label>
            <label> From
                <input type="text" placeholder="collegeDateFrom" value={values.collegeDateFrom} onChange={handleChange('collegeDateFrom')} />
            </label>
            <label> To
                <input type="text" placeholder="collegeDateTo" value={values.collegeDateTo} onChange={handleChange('collegeDateTo')} />
            </label>
            <label> Description
                <input type="text" placeholder="collegeDescription" value={values.collegeDescription} onChange={handleChange('collegeDescription')} />
            </label>

            <label> School
                <input type="text" placeholder="School" value={values.college} onChange={handleChange('school')} />
            </label>
            <label> Qualification
                <input type="text" placeholder="schoolQualification" value={values.schoolQualification} onChange={handleChange('schoolQualification')} />
            </label>
            <label> From
                <input type="text" placeholder="schoolDateFrom" value={values.schoolDateFrom} onChange={handleChange('schoolDateFrom')} />
            </label>
            <label> To
                <input type="text" placeholder="schoolDateTo" value={values.schoolDateTo} onChange={handleChange('schoolDateTo')} />
            </label>
            <label> Description
                <input type="text" placeholder="schoolDescription" value={values.schoolDescription} onChange={handleChange('schoolDescription')} />
            </label>

            <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button>
        </div>
    )
}

export default Education