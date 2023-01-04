import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Personal = ({ prevStep, nextStep, handleChange, values }) => {

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
            <h1>Personal Details</h1>
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
                        label="First name"
                        value={values.firstname}
                        onChange={handleChange('firstname')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Last name"
                        value={values.lastname}
                        onChange={handleChange('lastname')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Phone number"
                        value={values.phonenumber}
                        onChange={handleChange('phonenumber')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Website"
                        value={values.website}
                        onChange={handleChange('website')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Github"
                        value={values.github}
                        onChange={handleChange('github')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Linkedin"
                        value={values.linkedin}
                        onChange={handleChange('linkedin')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Twitter"
                        value={values.twitter}
                        onChange={handleChange('twitter')}
                    />
                </div>

                <div>
                    <TextField
                        id="outlined-error"
                        label="Facebook"
                        value={values.facebook}
                        onChange={handleChange('facebook')}
                    />
                    <TextField
                        id="outlined-error-helper-text"
                        label="Instagram"
                        value={values.instagram}
                        onChange={handleChange('instagram')}
                    />
                </div>
            </Box>

            {/* <div class>
                <label> First Name
                    <input type="text" placeholder="First name" value={values.firstname} onChange={handleChange('firstname')} />
                </label>

                <label> Last Name
                    <input type="text" placeholder="Last name" value={values.lastname} onChange={handleChange('lastname')} />
                </label>

                <label> Email
                    <input type="text" placeholder="Email address" value={values.email} onChange={handleChange('email')} />
                </label>

                <label> Phone Number
                    <input type="text" placeholder="Phone number" value={values.phonenumber} onChange={handleChange('phonenumber')} />
                </label>

                <label>Your Website
                    <input type="text" placeholder="Web site" value={values.website} onChange={handleChange('website')} />
                </label>

                <label>Github
                    <input type="text" placeholder="Github" value={values.github} onChange={handleChange('github')} />
                </label>

                <label>Linkedin
                    <input type="text" placeholder="Linkedin" value={values.linkedin} onChange={handleChange('linkedin')} />
                </label>

                <label>Twitter
                    <input type="text" placeholder="Twitter" value={values.twitter} onChange={handleChange('twitter')} />
                </label>

                <label>Facebook
                    <input type="text" placeholder="Facebook" value={values.facebook} onChange={handleChange('facebook')} />
                </label>

                <label>Instagram
                    <input type="text" placeholder="Instagram" value={values.instagram} onChange={handleChange('instagram')} />
                </label>
            </div> */}

            {/* <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button> */}

            <Button variant="outlined" onClick={Previous}>BACK</Button>
            <Button variant="contained" onClick={Continue}>NEXT</Button>

        </div>
    )
}

export default Personal;