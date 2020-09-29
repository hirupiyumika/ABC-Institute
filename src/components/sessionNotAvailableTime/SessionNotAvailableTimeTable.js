// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "../../context/StudentContext";
import SearchBox from "../common/SearchBox";
import Swal from "sweetalert2";
import SessionNotAvailableTimeItem from "./SessionNotAvailableTimeItem";

const SessionNotAvailableTimeTable = () => {
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
          filterSessionNotAvailableTime,
          deleteSessionNotAvailableTimes,
          sortedSessionsNotAvailableTime,
          search,
          handleSessionNotAvailableTimeChange,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleSessionNotAvailableTimeChange}
              search={search}
              placeholder="Search"
            />
            {sortedSessionsNotAvailableTime.length === 0 ? (
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
                    <th>Session</th>
                    <th>Day</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedSessionsNotAvailableTime.map((item) => (
                    <SessionNotAvailableTimeItem
                      key={item._id}
                      item={item}
                      deleteSessionNotAvailableTimes={
                        deleteSessionNotAvailableTimes
                      }
                      filterSessionNotAvailableTime={
                        filterSessionNotAvailableTime
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

export default SessionNotAvailableTimeTable;
