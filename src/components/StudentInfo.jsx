import React, { Component } from "react";
import axios from "axios";

class StudentInfo extends Component {
  state = {
    student: { this_data_is: "loading" }
  };

  componentDidMount() {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.id}`
      )
      .then(({ data: { student } }) => {
        this.setState({ student });
      });
  }

  render() {
    console.log(this.state);
    return <div>{JSON.stringify(this.state.student)}</div>;
  }
}

export default StudentInfo;
