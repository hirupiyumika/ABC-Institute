import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SearchBox from "./../common/SearchBox";
import { LogConsumer } from "../../context/context";
import SubjectTableBody from "./SubjectTableBody";

const ViewSubjects = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedSubjects,
          deleteSubject,
          handleSubjectChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Subject</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <SearchBox
                handleChange={handleSubjectChange}
                search={search}
                placeholder="Search"
              />
              <br />
              {sortedSubjects.length === 0 ? (
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
                      <th>Subject</th>
                      <th>Code</th>
                      <th>Offered Year</th>
                      <th>Offered Semester</th>
                      <th>Lecture Hours</th>
                      <th>Tutorial Hours</th>
                      <th>Lab Hours</th>
                      <th>Evolution Hours</th>
                      <th>Create</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedSubjects.map((sub) => (
                      <SubjectTableBody
                        key={sub.code}
                        sub={sub}
                        deleteSubject={deleteSubject}
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

export default ViewSubjects;
