import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const LecturersStatistics = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Lecturers Statistics</Breadcrumb.Item>
        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sessions In</th>
              <th>Working Hours</th>
              <th>Percentage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr.Nuwan Kodagoda</td>
              <td>25</td>
              <td>20</td>
              <td>19%</td>
            </tr>
            <tr>
              <td>Ms. Hansi Mayadunna</td>
              <td>100</td>
              <td>50</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Ms. Rashmi Shamindra</td>
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

export default LecturersStatistics;
