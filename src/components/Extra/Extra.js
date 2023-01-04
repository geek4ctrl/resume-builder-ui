import React from 'react';

const Extra = ({ prevStep, nextStep, handleChange, values }) => {

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
            <h1>Extra Details</h1>

            <label> Skills/Languages
                <input type="text" placeholder="skill1" value={values.skill1} onChange={handleChange('skill1')} />
                <input type="text" placeholder="skill2" value={values.skill2} onChange={handleChange('skill2')} />
                <input type="text" placeholder="skill3" value={values.skill3} onChange={handleChange('skill3')} />
                <input type="text" placeholder="skill4" value={values.skill4} onChange={handleChange('skill4')} />
            </label>

            <label> Interest
                <input type="text" placeholder="interest1" value={values.interest1} onChange={handleChange('interest1')} />
                <input type="text" placeholder="interest2" value={values.interest2} onChange={handleChange('interest2')} />
                <input type="text" placeholder="interest3" value={values.interest3} onChange={handleChange('interest3')} />
                <input type="text" placeholder="interest4" value={values.interest4} onChange={handleChange('interest4')} />
            </label>

            <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button>
        </div>
    )
}

export default Extra