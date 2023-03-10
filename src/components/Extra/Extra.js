import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Extra = ({ prevStep, nextStep, handleChange, handleSubmit, values }) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Submit = e => {
        e.preventDefault();
        handleSubmit();
    }

    return (
        <div>
            <h1>Extra Details</h1>
            <hr />

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2>Skills/Languages</h2>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Skill 1"
                        value={values.skill1}
                        onChange={handleChange('skill1')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Skill 2"
                        value={values.skill2}
                        onChange={handleChange('skill2')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Skill 3"
                        value={values.skill3}
                        onChange={handleChange('skill3')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Skill 4"
                        value={values.skill4}
                        onChange={handleChange('skill4')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Skill 5"
                        value={values.skill5}
                        onChange={handleChange('skill5')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Skill 6"
                        value={values.skill6}
                        onChange={handleChange('skill6')}
                    />
                </div>

                <h2>Interest</h2>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Interest 1"
                        value={values.interest1}
                        onChange={handleChange('interest1')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Interest 2"
                        value={values.interest2}
                        onChange={handleChange('interest2')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Interest 3"
                        value={values.skill3}
                        onChange={handleChange('interest3')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Interest 4"
                        value={values.interest4}
                        onChange={handleChange('interest4')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Interest 5"
                        value={values.interest5}
                        onChange={handleChange('interest5')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Interest 6"
                        value={values.interest6}
                        onChange={handleChange('interest6')}
                    />
                </div>

            </Box>

            <Button variant="outlined" onClick={Previous}>BACK</Button>
            <Button variant="contained" onClick={Submit}>SUBMIT</Button>
        </div>
    )
}

export default Extra;