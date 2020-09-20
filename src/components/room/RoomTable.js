import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert";
import AddRoom from "./AddRoom";
import { Link } from "react-router-dom";
import { LogConsumer } from "../../context/context";
import RoomTableBody from "./RoomTableBody";
import SearchBox from "./../common/SearchBox";

const RoomTable = () => {
  return (
    <LogConsumer>
      {(value) => {
        const {
          sortedRooms,
          alert,
          deleteRoom,
          addRoom,
          handleRoomChange,
          search,
        } = value;
        return (
          <>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Add Room</Breadcrumb.Item>
              {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
            </Breadcrumb>
            <Container>
              <AddRoom addRoom={addRoom} />
              {alert.show && (
                <Alert variant={alert.variant}>{alert.message}</Alert>
              )}
              <SearchBox
                handleChange={handleRoomChange}
                search={search}
                placeholder="Search"
              />
              <br />
              {sortedRooms.length === 0 ? (
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
                      <th>Room</th>
                      <th>Building</th>
                      <th>Capacity</th>
                      <th>Added Date</th>
                      <th>Added Time</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedRooms.map((room) => (
                      <RoomTableBody
                        key={room._id}
                        room={room}
                        deleteRoom={deleteRoom}
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

export default RoomTable;
