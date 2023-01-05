import './Resume.css';
import React, { Component } from 'react';
import Personal from '../Personal/Personal';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Extra from '../Extra/Extra';

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

    render() {

        const { step } = this.state;
        const { firstname, lastname, email, phone, github, linkedin, facebook, instagram } = this.state;
        const values = { firstname, lastname, email, phone, github, linkedin, facebook, instagram };

        switch (step) {
            case 1:
                return (
                    <Personal nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
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
                    <Extra prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            default:

        }
    }

}

export default Resume;