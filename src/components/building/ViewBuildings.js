import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SearchBox from "./../common/SearchBox";
import { Link } from "react-router-dom";
import { LogConsumer } from "../../context/context";
import BuildingTableBody from "./BuildingTableBody";

const ViewBuildings = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedBuildings,
          alert,
          deleteBuilding,
          addBuilding,
          handleBuildingChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Building</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <SearchBox
                handleChange={handleBuildingChange}
                search={search}
                placeholder="Search"
              />
              <br></br>
              {sortedBuildings.length === 0 ? (
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
                      <th>Building</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedBuildings.map((buil) => (
                      <BuildingTableBody
                        key={buil._id}
                        buil={buil}
                        deleteBuilding={deleteBuilding}
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

export default ViewBuildings;
