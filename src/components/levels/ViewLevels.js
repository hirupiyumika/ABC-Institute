import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SearchBox from "./../common/SearchBox";
import { Link } from "react-router-dom";
import { LogConsumer } from "../../context/context";
import LevelTableBody from "./LevelTableBody";

const ViewLevels = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedLevels,
          alert,
          deleteLevel,
          addLevel,
          handleLevelChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Level</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <SearchBox
                handleChange={handleLevelChange}
                search={search}
                placeholder="Search"
              />
              <br />
              {sortedLevels.length === 0 ? (
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
                      <th>Category</th>
                      <th>Level</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedLevels.map((lev) => (
                      <LevelTableBody
                        key={lev._id}
                        lev={lev}
                        deleteLevel={deleteLevel}
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

export default ViewLevels;
