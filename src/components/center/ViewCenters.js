import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SearchBox from "./../common/SearchBox";
import { LogConsumer } from "../../context/context";
import CenterTableBody from "./CenterTableBody";

const ViewCenters = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedCenters,

          deleteCenter,

          search,
          handleCenterChange,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Center</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
              <SearchBox
                handleChange={handleCenterChange}
                search={search}
                placeholder="Search"
              />
              <br />
              {sortedCenters.length === 0 ? (
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
                      <th>Center</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCenters.map((cent) => (
                      <CenterTableBody
                        key={cent._id}
                        cent={cent}
                        deleteCenter={deleteCenter}
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

export default ViewCenters;
