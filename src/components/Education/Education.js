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

            <Button variant="outlined" onClick={Previous}>BACK</Button>
            <Button variant="contained" onClick={Continue}>NEXT</Button>
        </div>
    )
}

export default Education;