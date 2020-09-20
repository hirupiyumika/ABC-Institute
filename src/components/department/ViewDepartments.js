import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SearchBox from "./../common/SearchBox";
import { Link } from "react-router-dom";
import { LogConsumer } from "../../context/context";
import DepartmentTableBody from "./DepartmentTableBody";

const ViewDepartments = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedDepartments,
          alert,
          deleteDepartment,
          addDepartment,
          handleDepartmentChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Department</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <SearchBox
                handleChange={handleDepartmentChange}
                search={search}
                placeholder="Search"
              />
              <br />
              {sortedDepartments.length === 0 ? (
                <div
                  className="col  text-color-ash text-center "
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    marginBottom: "500px",
                  }}
                >
                  sorry, no items matched your search
                </div>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedDepartments.map((dep) => (
                      <DepartmentTableBody
                        key={dep._id}
                        dep={dep}
                        deleteDepartment={deleteDepartment}
                      />
                    ))}
                  </tbody>
                </Table>
              )}
            </Container>
          </>
        );
      }}
    </LogConsumer>
  );
};

export default ViewDepartments;
