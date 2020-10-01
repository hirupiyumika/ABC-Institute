import React, { useState, useContext, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LogContext } from "../../context/context";
import { StudentContext } from "../../context/StudentContext";

const Statistics = () => {
  const { lecturers, subjects } = useContext(LogContext);
  const { students } = useContext(StudentContext);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let std = students.length;
    let lec = lecturers.length;
    let sub = subjects.length;
    getChartData(std, lec, sub);
  }, []);

  const getChartData = (std, lec, sub) => {
    setChartData({
      labels: ["GROUPS", "LECTURERS", "SUBJECTS"],
      datasets: [
        {
          data: [std, lec, 10000],
          backgroundColor: [
            "rgba(255,99,132,0.6)",
            "rgba(54,162,235,0.6)",
            "rgba(191, 0, 255,0.6)",
          ],
        },
      ],
    });
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Statistics</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <div style={{ position: "relative", width: 450, heigth: 650 }}>
          <Pie
            data={chartData}
            options={{
              title: {
                display: true,
                text: "Current Statistics of Lecturers, Subjects & Groups",
                fontSize: 12,
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
};

export default Statistics;
