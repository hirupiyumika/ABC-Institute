// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "../../context/StudentContext";
import GroupNotAvailableTimeItem from "./GroupNotAvailableTimeItem";
import SearchBox from "../common/SearchBox";
import Swal from "sweetalert2";

const GroupNotAvailableTimeTable = () => {
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
          filterGroupNotAvailableTime,
          deleteGroupNotAvailableTimes,
          sortedGroupsNotAvailableTime,
          search,
          handleGroupNotAvailableTimeChange,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleGroupNotAvailableTimeChange}
              search={search}
              placeholder="Search"
            />
            {sortedGroupsNotAvailableTime.length === 0 ? (
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
                    <th>Group</th>
                    <th>Day</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedGroupsNotAvailableTime.map((item) => (
                    <GroupNotAvailableTimeItem
                      key={item._id}
                      item={item}
                      deleteGroupNotAvailableTimes={
                        deleteGroupNotAvailableTimes
                      }
                      filterGroupNotAvailableTime={filterGroupNotAvailableTime}
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

export default GroupNotAvailableTimeTable;
