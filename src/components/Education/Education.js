import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            <hr />

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <div>
                    <TextField
                        id="outlined-error"
                        label="College"
                        value={values.college}
                        onChange={handleChange('college')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="From"
                        value={values.collegeDateFrom}
                        onChange={handleChange('collegeDateFrom')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="To"
                        value={values.collegeDateTo}
                        onChange={handleChange('collegeDateTo')}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Qualification"
                        value={values.collegeQualification}
                        onChange={handleChange('collegeQualification')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Description"
                        value={values.collegeDescription}
                        onChange={handleChange('collegeDescription')}
                    />
                </div>

                <hr />


                <div>
                    <TextField
                        id="outlined-error"
                        label="School"
                        value={values.college}
                        onChange={handleChange('college')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="From"
                        value={values.schoolDateFrom}
                        onChange={handleChange('schoolDateFrom')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="To"
                        value={values.schoolDateTo}
                        onChange={handleChange('schoolDateTo')}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Qualification"
                        value={values.schoolQualification}
                        onChange={handleChange('schoolQualification')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Description"
                        value={values.schoolDescription}
                        onChange={handleChange('schoolDescription')}
                    />
                </div>

            </Box>

            {/* <label> College/University
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
            </label> */}

            {/* <label> School
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
            </label> */}

            {/* <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button> */}

            <Button variant="outlined" onClick={Previous}>BACK</Button>
            <Button variant="contained" onClick={Continue}>NEXT</Button>
        </div>
    )
}

export default Education;