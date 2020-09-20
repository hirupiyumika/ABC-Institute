// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "./../../context/StudentContext";
import GroupItem from "./../tables/GroupItem";
import SearchBox from "./../common/SearchBox";
import Swal from "sweetalert2";

const GroupTable = () => {
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
          filterGroup,
          deleteGroup,
          sortedGroups,
          search,
          handleGroupChange,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleGroupChange}
              search={search}
              placeholder="Search"
            />
            {sortedGroups.length === 0 ? (
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
                    <th>Added Date</th>
                    <th>Added Time</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedGroups.map((group) => (
                    <GroupItem
                      key={group._id}
                      group={group}
                      deleteGroup={deleteGroup}
                      filterGroup={filterGroup}
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

export default GroupTable;
