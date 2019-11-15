import React, { Component } from 'react';

class StudentAdder extends Component {

    state = {
        name: '',
        startingCohort: 1
    }

    handleChange = (input, key) => {
        this.setState({[key]: input})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, startingCohort} = this.state;
        const {postStudent, addStudent} = this.props;
        postStudent({name, startingCohort}).then(postedStudent => {
            addStudent(postedStudent);
        });
        this.setState({name: '', startingCohort: 1});
    }

    render() {
        return (
            <form className='adder' onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type='text' id='name' value={this.state.name} onChange={(event) => this.handleChange(event.target.value, 'name')} />
                </label>
                <label>
                    Starting Cohort:
                    <input type='number' id='startingCohort' min={1} value={this.state.startingCohort} onChange={(event) => this.handleChange(event.target.value, 'startingCohort')} />
                </label>
                <button>Add Student</button>
            </form>
        );
    }
}

export default StudentAdder;