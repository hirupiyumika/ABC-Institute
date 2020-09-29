// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "../../context/StudentContext";
import LecturerNotAvailableTimeItem from "./LecturerNotAvailableTimeItem";
import SearchBox from "../common/SearchBox";
import Swal from "sweetalert2";

const LecturerNotAvailableTimeTable = () => {
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
          filterLecturerNotAvailableTime,
          deleteLecturerNotAvailableTimes,
          sortedLecturersNotAvailableTime,
          search,
          handleLecturerNotAvailableTimeChange,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleLecturerNotAvailableTimeChange}
              search={search}
              placeholder="Search"
            />
            {sortedLecturersNotAvailableTime.length === 0 ? (
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
                    <th>Lecturer</th>
                    <th>Day</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedLecturersNotAvailableTime.map((item) => (
                    <LecturerNotAvailableTimeItem
                      key={item._id}
                      item={item}
                      deleteLecturerNotAvailableTimes={
                        deleteLecturerNotAvailableTimes
                      }
                      filterLecturerNotAvailableTime={
                        filterLecturerNotAvailableTime
                      }
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

export default LecturerNotAvailableTimeTable;
