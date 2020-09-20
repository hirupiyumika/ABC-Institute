import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const SubjectsStatistics = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Subjects Statistics</Breadcrumb.Item>
        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Sessions In</th>
              <th>Duration (in Hours)</th>
              <th>Percentage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SPM</td>
              <td>25</td>
              <td>20</td>
              <td>19%</td>
            </tr>
            <tr>
              <td>OOP</td>
              <td>100</td>
              <td>50</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>DBS</td>
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

export default SubjectsStatistics;
