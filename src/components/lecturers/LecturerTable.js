import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AddLecturer from "./AddLecturer";
import { Link } from "react-router-dom";
import { LogConsumer } from "../../context/context";
import LecturerTableBody from "./LecturtrTableBody";
import SearchBox from "./../common/SearchBox";

const LecturerTable = () => {
  return (
    <LogConsumer> 
      {(value) => {
        const {
          sortedLecturers,
          alert,
          deleteLecturer,
          addLecturer,
          handleLecturerChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Lecturer</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <AddLecturer addLecturer={addLecturer} />
              {alert.show && (
                <Alert variant={alert.variant}>{alert.message}</Alert>
              )}
              <SearchBox
                handleChange={handleLecturerChange}
                search={search}
                placeholder="Search"
              />
              <br></br>
              {sortedLecturers.length === 0 ? (
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
                      <th>Name</th>
                      <th>ID</th>
                      <th>Faculty</th>
                      <th>Department</th>
                      <th>Center</th>
                      <th>Building</th>
                      <th>Level</th>
                      <th>Rank</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedLecturers.map((lec) => (
                      <LecturerTableBody
                        key={lec.eid}
                        lec={lec}
                        deleteLecturer={deleteLecturer}
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

export default LecturerTable;
