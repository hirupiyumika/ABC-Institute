import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LogContext } from "../../context/context";
import { StudentContext } from "../../context/StudentContext";
import { ipcRenderer } from "electron";

class Statistics extends Component {
  state = {
    lecturers: [],
    subjects: [],
    students: [],
    chartData: {},
  };

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    ipcRenderer.send("students:load");
    ipcRenderer.on("students:get", (e, students) => {
      this.setState({
        students: JSON.parse(students),
        sortedStudents: JSON.parse(students),
      });

      ipcRenderer.send("lecturers:load");
      ipcRenderer.on("lecturers:get", (e, lecturers) => {
        this.setState({
          lecturers: JSON.parse(lecturers),
        });
        ipcRenderer.send("subjects:load");
        ipcRenderer.on("subjects:get", (e, subjects) => {
          this.setState({
            subjects: JSON.parse(subjects),
            sortedSubjects: JSON.parse(subjects),
          });
          const std = this.state.students.length;
          const lec = this.state.lecturers.length;
          const sub = this.state.subjects.length;
          this.setState({
            chartData: {
              labels: ["STUDENTS", "LECTURERS", "SUBJECTS"],
              datasets: [
                {
                  // label: "INCOME",
                  data: [std, lec, sub],
                  backgroundColor: [
                    "rgba(255, 191, 0,0.6)",
                    "rgba(0, 191, 255,0.6)",
                    "rgba(191, 0, 255,0.6)",
                  ],
                },
              ],
            },
          });
        });
      });
    });
  }

  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Statistics</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <div style={{ position: "relative" }}>
            <Pie
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text: "Current Statistics of Lecturers, Subjects & Groups",
                  fontSize: 18,
                },
                legend: {
                  display: true,
                  position: "bottom",
                },
              }}
            />
          </div>
        </Container>
      </>
    );
  }
}
export default Statistics;
