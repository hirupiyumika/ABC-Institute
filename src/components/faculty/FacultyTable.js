import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import AddFaculty from "./AddFaculty";
import { Link } from "react-router-dom";
import { LogConsumer } from "../../context/context";
import FacultyTableBody from "./FacultyTableBody";
import SearchBox from "./../common/SearchBox";

const FacultyTable = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedFaculties,
          alert,
          deleteFaculty,
          addFaculty,
          handleFacultyChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Faculty</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <AddFaculty addFaculty={addFaculty} />
              {alert.show && (
                <Alert variant={alert.variant}>{alert.message}</Alert>
              )}
              <SearchBox
                handleChange={handleFacultyChange}
                search={search}
                placeholder="Search"
              />
              <br />
              {sortedFaculties.length === 0 ? (
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
                      <th>Faculty</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedFaculties.map((fac) => (
                      <FacultyTableBody
                        key={fac._id}
                        fac={fac}
                        deleteFaculty={deleteFaculty}
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

export default FacultyTable;
