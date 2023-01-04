import React from 'react';

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

            <button onClick={Previous}>BACK</button>
            <button onClick={Continue}>NEXT</button>

        </div>
    )
}

export default Personal