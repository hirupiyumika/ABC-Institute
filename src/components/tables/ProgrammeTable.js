// IT18233704 -  N.R Yamasinghe
import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { StudentConsumer } from "./../../context/StudentContext";
import ProgrammeItem from "./../tables/ProgrammeItem";
import SearchBox from "./../common/SearchBox";
import Swal from "sweetalert2";

const ProgrammeTable = () => {
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
          filterProgramme,
          deleteProgramme,
          sortedProgrammes,
          handleProgrammeChange,
          search,
        } = value;
        return (
          <Container>
            <SearchBox
              handleChange={handleProgrammeChange}
              search={search}
              placeholder="Search"
            />

            {sortedProgrammes.length === 0 ? (
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
                    <th>Programme</th>
                    <th>Added Date</th>
                    <th>Added Time</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedProgrammes.map((programme) => (
                    <ProgrammeItem
                      key={programme._id}
                      programme={programme}
                      deleteProgramme={deleteProgramme}
                      filterProgramme={filterProgramme}
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

export default ProgrammeTable;
