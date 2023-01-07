import './Resume.css';
import React, { Component } from 'react';
import axios from "axios";
import { saveAs } from 'file-saver';

import Personal from '../Personal/Personal';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Extra from '../Extra/Extra';

import Button from '@mui/material/Button';


class Resume extends Component {

    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        website: '',
        github: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        instagram: '',

        college: '',
        collegeQualification: '',
        collegeDateFrom: '',
        collegeDateTo: '',
        collegeDescription: '',
        school: '',
        schoolQualification: '',
        schoolDateFrom: '',
        schoolDateTo: '',
        schoolDescription: '',

        projectTitle1: '',
        projectLink1: '',
        projectDescription1: '',
        projectTitle2: '',
        projectLink2: '',
        projectDescription2: '',
        projectTitle3: '',
        projectLink3: '',
        projectDescription3: '',

        experienceOrganisation1: '',
        experiencePosition1: '',
        experienceDuration1: '',
        experienceDescription1: '',
        experienceOrganisation2: '',
        experiencePosition2: '',
        experienceDuration2: '',
        experienceDescription2: '',

        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        skill6: '',
        interest1: '',
        interest2: '',
        interest3: '',
        interest4: '',
        interest5: '',
        interest6: ''

    };

    constructor(props) {
        super(props);
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleSubmit = () => {
        this.createAndDownloadPDF();
    }

    createAndDownloadPDF = () => {
        axios
            .create({
                baseURL: "http://localhost:3000/"
            })
            .post('/create-pdf', this.state)
            .then(() => {
                axios
                    .get('/fetch-pdf', { responseType: 'arraybuffer' })
                    .then(res => {
                        let blob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(blob, `${this.state.firstname}'s Resume.pdf`);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            });
    };

    render() {

        const { step } = this.state;

        const { firstname, lastname, email, phonenumber, website, github, linkedin, twitter, facebook, instagram, college, collegeQualification, collegeDateFrom, collegeDateTo, collegeDescription, school,
            schoolQualification, schoolDateFrom, schoolDateTo, schoolDescription, projectTitle1, projectLink1, projectDescription1, projectTitle2, projectLink2, projectDescription2, projectTitle3, projectLink3, projectDescription3,
            experienceOrganisation1, experiencePosition1, experienceDuration1, experienceDescription1, experienceOrganisation2, experiencePosition2, experienceDuration2, experienceDescription2,
            skill1, skill2, skill3, skill4, skill5, skill6, interest1, interest2, interest3, interest4, interest5, interest6 } = this.state;

        const values = {
            firstname, lastname, email, phonenumber, website, github, linkedin, twitter, facebook, instagram, college, collegeQualification, collegeDateFrom, collegeDateTo, collegeDescription, school,
            schoolQualification, schoolDateFrom, schoolDateTo, schoolDescription, projectTitle1, projectLink1, projectDescription1, projectTitle2, projectLink2, projectDescription2, projectTitle3, projectLink3, projectDescription3,
            experienceOrganisation1, experiencePosition1, experienceDuration1, experienceDescription1, experienceOrganisation2, experiencePosition2, experienceDuration2, experienceDescription2,
            skill1, skill2, skill3, skill4, skill5, skill6, interest1, interest2, interest3, interest4, interest5, interest6
        };

        switch (step) {
            case 1:
                return (
                    <div>
                        <Personal nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                        <Button variant="contained" onClick={this.createAndDownloadPDF}>SUBMIT</Button>
                    </div>
                )
            case 2:
                return (
                    <Education prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 3:
                return (
                    <Projects prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 4:
                return (
                    <Experience prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 5:
                return (
                    <Extra prevStep={this.prevStep} handleChange={this.handleChange} values={values} handleSubmit={this.handleSubmit} />
                )
            default:

        }

    }

}

export default Resume;