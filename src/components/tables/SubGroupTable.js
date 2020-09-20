// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "./../../context/StudentContext";
import SubGroupItem from "./../tables/SubGroupItem";
import SearchBox from "./../common/SearchBox";
import Swal from "sweetalert2";

const SubGroupTable = () => {
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
          sortedSubGroups,
          filterSubGroup,
          deleteSubGroup,
          handleSubGroupChange,
          search,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleSubGroupChange}
              search={search}
              placeholder="Search"
            />

            {sortedSubGroups.length === 0 ? (
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
                    <th>Sub Group</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedSubGroups.map((subGroup) => (
                    <SubGroupItem
                      key={subGroup._id}
                      subGroup={subGroup}
                      deleteSubGroup={deleteSubGroup}
                      filterSubGroup={filterSubGroup}
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

export default SubGroupTable;
