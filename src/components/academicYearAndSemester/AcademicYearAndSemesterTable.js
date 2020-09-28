// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "./../../context/StudentContext";
import AcademicYearAndSemesterItem from "./AcademicYearAndSemesterItem";
import SearchBox from "./../common/SearchBox";
import Swal from "sweetalert2";

const AcademicYearAndSemesterTable = () => {
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
          filterAcademicYearAndSemester,
          deleteAcademicYearAndSemester,
          sortedAcademicYearAndSemesters,
          search,
          handleAcademicYearAndSemestersChange,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleAcademicYearAndSemestersChange}
              search={search}
              placeholder="Search"
            />

            {sortedAcademicYearAndSemesters.length === 0 ? (
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
                    <th>Semester</th>
                    <th>Y & S</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedAcademicYearAndSemesters.map(
                    (academicYearAndSemester) => (
                      <AcademicYearAndSemesterItem
                        key={academicYearAndSemester._id}
                        academicYearAndSemester={academicYearAndSemester}
                        deleteAcademicYearAndSemester={
                          deleteAcademicYearAndSemester
                        }
                        filterAcademicYearAndSemester={
                          filterAcademicYearAndSemester
                        }
                      />
                    )
                  )}
                </tbody>
              </Table>
            )}
          </Container>
        );
      }}
    </StudentConsumer>
  );
};

export default AcademicYearAndSemesterTable;
