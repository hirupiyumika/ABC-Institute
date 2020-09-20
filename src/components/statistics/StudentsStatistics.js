import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const StudentsStatistics = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Students Statistics</Breadcrumb.Item>
        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Sessions In</th>
              <th>Duration (inHours)</th>
              <th>Percentage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Y1.S1.IT01</td>
              <td>25</td>
              <td>20</td>
              <td>19%</td>
            </tr>
            <tr>
              <td>Y2.S2.CSNE01</td>
              <td>100</td>
              <td>50</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Y4.S2.SE02</td>
              <td>50</td>
              <td>20</td>
              <td>10%</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default StudentsStatistics;
