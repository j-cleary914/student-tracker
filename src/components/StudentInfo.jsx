import React, { Component } from "react";
import axios from "axios";

class StudentInfo extends Component {
  state = {
    student: {},
    isLoading: true
  };

  componentDidMount() {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
      )
      .then(({ data: { student } }) => {
        this.setState({ student, isLoading: false });
      });
  }

  render() {
    const {student, isLoading} = this.state;
    let count = 0;
    return (
      (isLoading) ? <p>Loading...</p> :
      <div>
        <h2>{student.name}: {student.blockHistory[student.blockHistory.length-1].name}</h2>
        <p>Starting Cohort: {student.startingCohort}</p>
        <div>
          Block History:
          {
            student.blockHistory.map(block => {
              count++;
              return <p key={count}>{block.name}</p>
            })
          }
        </div>

      </div>
    )
  }
}

export default StudentInfo;
