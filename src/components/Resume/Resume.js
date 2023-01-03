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
        phone: '',
        github: '',
        linkedin: '',
        facebook: '',
        instagram: ''
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
                    <Personal />
                )
            case 2:
                return (
                    <Education />
                )
            case 3:
                return (
                    <Projects />
                )
            case 4:
                return (
                    <Experience />
                )
            case 5:
                return (
                    <Extra />
                )
            default:

        }
    }

}

export default Resume;