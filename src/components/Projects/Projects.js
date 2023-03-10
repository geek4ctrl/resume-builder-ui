import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            <h1>Projects Developed</h1>
            <hr />

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h3>Project 1</h3>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Title"
                        value={values.projectTitle1}
                        onChange={handleChange('projectTitle1')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Link"
                        value={values.projectLink1}
                        onChange={handleChange('projectLink1')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Description"
                        value={values.projectDescription1}
                        onChange={handleChange('projectDescription1')}
                    />
                </div>
                <hr />

                <h3>Project 2</h3>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Title"
                        value={values.projectTitle2}
                        onChange={handleChange('projectTitle2')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Link"
                        value={values.projectLink2}
                        onChange={handleChange('projectLink2')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Description"
                        value={values.projectDescription2}
                        onChange={handleChange('projectDescription2')}
                    />
                </div>
                <hr />

                <h3>Project 3</h3>
                <div>
                    <TextField
                        id="outlined-error"
                        label="Title"
                        value={values.projectTitle3}
                        onChange={handleChange('projectTitle3')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Link"
                        value={values.projectLink3}
                        onChange={handleChange('projectLink3')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Description"
                        value={values.projectDescription3}
                        onChange={handleChange('projectDescription3')}
                    />
                </div>

            </Box>

            <Button variant="outlined" onClick={Previous}>BACK</Button>
            <Button variant="contained" onClick={Continue}>NEXT</Button>

        </div>
    )
}

export default Projects;