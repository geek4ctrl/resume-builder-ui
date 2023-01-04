import React from 'react';

const Projects = ({ prevStep, nextStep, handleChange, values }) => {

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
            <h1>Projects</h1>

            <label> Project 1
                <input type="text" placeholder="projectTitle1" value={values.projectTitle1} onChange={handleChange('projectTitle1')} />
                <input type="text" placeholder="projectLink1" value={values.projectLink1} onChange={handleChange('projectLink1')} />
                <input type="text" placeholder="projectDescription1" value={values.projectDescription1} onChange={handleChange('projectDescription1')} />
            </label>

            <label> Project 2
                <input type="text" placeholder="projectTitle2" value={values.projectTitle2} onChange={handleChange('projectTitle2')} />
                <input type="text" placeholder="projectLink2" value={values.projectLink2} onChange={handleChange('projectLink2')} />
                <input type="text" placeholder="projectDescription2" value={values.projectDescription2} onChange={handleChange('projectDescription2')} />
            </label>

            <label> Project 3
                <input type="text" placeholder="projectTitle3" value={values.projectTitle3} onChange={handleChange('projectTitle3')} />
                <input type="text" placeholder="projectLink3" value={values.projectLink3} onChange={handleChange('projectLink3')} />
                <input type="text" placeholder="projectDescription3" value={values.projectDescription3} onChange={handleChange('projectDescription3')} />
            </label>

            <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button>

        </div>
    )
}

export default Projects