import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <h2>Experience 1</h2>
                <hr />

                <div>
                    <TextField
                        id="outlined-error"
                        label="Institute/Organisation"
                        value={values.experienceOrganisation1}
                        onChange={handleChange('experienceOrganisation1')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Position"
                        value={values.experiencePosition1}
                        onChange={handleChange('experiencePosition1')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Duration"
                        value={values.experienceDuration1}
                        onChange={handleChange('experienceDuration1')}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Description"
                        value={values.experienceDescription1}
                        onChange={handleChange('experienceDescription1')}
                    />
                </div>

                <hr />

                <h2>Experience 2</h2>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Institute/Organisation"
                        value={values.experienceOrganisation2}
                        onChange={handleChange('experienceOrganisation2')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Position"
                        value={values.experiencePosition2}
                        onChange={handleChange('experiencePosition2')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Duration"
                        value={values.experienceDuration2}
                        onChange={handleChange('experienceDuration2')}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Description"
                        value={values.experienceDescription2}
                        onChange={handleChange('experienceDescription2')}
                    />
                </div>

            </Box>

            {/* <label> Experience 1
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
            </label> */}

            {/* <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button> */}

            <Button variant="outlined" onClick={Previous}>BACK</Button>
            <Button variant="contained" onClick={Continue}>NEXT</Button>
        </div>
    )
}

export default Experience