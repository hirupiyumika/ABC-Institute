// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "./../../context/StudentContext";
import StudentItem from "./../tables/StudentItem";
import SearchBox from "./../common/SearchBox";
import Swal from "sweetalert2";

const StudentTable = () => {
  const condition = navigator.onLine;

  if (!condition) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No internet connection!",
    });
  }
  return (
    <StudentConsumer>
      {(value) => {
        const {
          sortedStudents,
          filterStudent,
          deleteStudent,
          search,
          handleStudentChange,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleStudentChange}
              search={search}
              placeholder="Search"
            />
            {sortedStudents.length === 0 ? (
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
              <Table className="mt-3">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Program</th>
                    <th>Group</th>
                    <th>SGroup</th>
                    <th>Group ID</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((student) => (
                    <StudentItem
                      key={student._id}
                      student={student}
                      deleteStudent={deleteStudent}
                      filterStudent={filterStudent}
                    />
                  ))}
                </tbody>
              </Table>
            )}
          </Container>
        );
      }}
    </StudentConsumer>
  );
};

export default StudentTable;
