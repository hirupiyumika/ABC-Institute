import React, { useContext, useState } from "react";
import { Container, Breadcrumb, Row, Col, Button, Form } from "react-bootstrap";
import { StudentContext } from "../../context/StudentContext";
import { DaysAndHoursContext } from "../../context/DaysAndHoursProvider";
import { LogContext } from "../../context/context";

const generateTimetable = ({ AddTimeTable }) => {
  const { students } = useContext(StudentContext);
  const { timeSlot, workingDays } = useContext(DaysAndHoursContext);
  const { rooms, primarySessions, lecturers } = useContext(LogContext);
  const [type, setType] = useState("");
  const [timetable, setTimetable] = useState([""]);
  var roomsWithTimes = [];
  var timetableForAll = [];
  var insertVariable;
  var generatedTimeTable = [];

  // // console.log(rooms);
  // Object.values(rooms).map(function (roomArray, i) {
  //   Object.values(timeSlot).map(function (item, i) {
  //     Object.values(item).map(function (dayarray, x) {
  //       console.log(dayarray);
  //       Object.values(dayarray).map(function (day, x) {
  //         // console.log(day);
  //         // roomsWithTimes.push({ room: roomArray, daytime: day });
  //       });
  //     });
  //   });
  // });
  // Object.values(item).map(function (day, x) {
  //   console.log(day);
  // });
  Object.values(rooms).map(function (roomArray, i) {
    insertVariable = 0;
    Object.values(timeSlot).map(function (item, i) {
      Object.values(item.daysAndSlots).map(function (dayarray, x) {
        roomsWithTimes.push({
          room: roomArray,
          day: dayarray.day,
          time: dayarray.time,
          sub: false,
        });
      });
    });
  });

  // insertVariable = 0;

  // Object.values(roomsWithTimes).map(function (room, i) {
  //   Object.values(primarySessions).map(function (session, x) {
  //     Object.values(session.lectureHalls).map(function (lechalls, z) {
  //       if (lechalls == room.room.roomName) {
  //         if (insertVariable != 1) {
  //           timetableForAll.push({
  //             roomAndTime: room,
  //             sub: session,
  //           });
  //         }
  //         insertVariable = 1;
  //       }
  //     });
  //     insertVariable = 0;
  //   });
  // });

  Object.values(primarySessions).map(function (session, i) {
    Object.values(session.lectureHalls).map(function (lechalls, x) {
      timetableForAll.map(function (records, i) {
        insertVariable = 0;
        if (records.sub._id == session._id) {
          insertVariable = 1;
        }
      });

      if (insertVariable == 0) {
        for (i = 0; i < session.duration; i++) {
          insertVariable = 0;
          roomsWithTimes.map(function (rooms, i) {
            if (insertVariable != 1) {
              if (
                rooms.sub == false &&
                rooms.room.capacity > session.stdCount
              ) {
                timetableForAll.push({
                  roomAndTime: rooms,
                  sub: session,
                });
                rooms.sub = true;
                insertVariable = 1;
              }
            }
          });
        }
      }
    });
  });

  // const checkTeachersTime = (name) => {

  // };

  // {
  //   timetableForAll.map(function (compare1, i) {
  //     console.log(compare1);
  //   });
  // }

  // Object.values(primarySessions).map(function (session, i) {
  //   if (session.lectureHalls.length == 0) {
  //     timetableForAll.map(function (records, i) {
  //       insertVariable = 0;
  //       if (records.sub._id == session._id) {
  //         insertVariable = 1;
  //       }
  //     });

  //     if (insertVariable == 0) {
  //       timetableForAll.push({
  //         roomAndTime: rooms,
  //         sub: session,
  //       });
  //     }
  //   }
  // });

  //   Object.values(session.lectureHalls).map(function (lechalls, x) {
  //     timetableForAll.map(function (records, i) {
  //       insertVariable = 0;
  //       if (records.sub._id == session._id) {
  //         insertVariable = 1;
  //       }
  //     });
  //     if (insertVariable == 0) {
  //       roomsWithTimes.map(function (rooms, i) {
  //         if (insertVariable != 1) {
  //           if (rooms.room.roomName == lechalls) {
  //             timetableForAll.push({
  //               roomAndTime: rooms,
  //               sub: session,
  //             });
  //             insertVariable = 1;
  //           } else {
  //             timetableForAll.push({
  //               roomAndTime: rooms,
  //               sub: session,
  //             });
  //             insertVariable = 1;
  //           }
  //         }
  //       });
  //     }
  //   });

  // console.log(rooms);
  const printData = () => {
    window.print();
  };

  const getTimetableViewType = (e) => {
    setType(e.target.value);
  };

  // console.log(timetableForAll);
  const generateTimetable = (e) => {
    generatedTimeTable = [];
    e.preventDefault();
    if (type == "L") {
      timetableForAll.map(function (records, i) {
        Object.values(records.sub.lecturers).map(function (lec, x) {
          if (lec == e.target.value) {
            generatedTimeTable.push({
              slot: records,
            });
          }
        });
      });
    } else if (type == "S") {
      timetableForAll.map(function (records, i) {
        if (records.sub.group == e.target.value) {
          generatedTimeTable.push({
            slot: records,
          });
        }
      });
    } else if (type == "R") {
      timetableForAll.map(function (records, i) {
        if (records.roomAndTime.room._id == e.target.value) {
          generatedTimeTable.push({
            slot: records,
          });
        }
      });
    }
    setTimetable(generatedTimeTable);
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Generate Timetables</Breadcrumb.Item>
      </Breadcrumb>

      <Container>
        <Form>
          <Row>
            <Col className="mt-5">
              <Form.Control as="select" onChange={getTimetableViewType}>
                <option>Select Timetable type</option>
                <option value="L">Lecturer</option>
                <option value="S">Student Group</option>
                <option value="R">Room</option>
              </Form.Control>
            </Col>
            <Col className="mt-5">
              <Form.Control as="select" onChange={generateTimetable}>
                {type == "L" ? <option>Select Lecturer</option> : null}
                {type == "S" ? <option>Select Student Group</option> : null}
                {type == "R" ? <option>Select Room</option> : null}

                {type == "L"
                  ? Object.values(lecturers).map(function (lecturer, i) {
                      return (
                        <option value={lecturer.name} key={i}>
                          {lecturer.name}
                        </option>
                      );
                    })
                  : null}
                {type == "S"
                  ? Object.values(students).map(function (group, i) {
                      return (
                        <option value={group.mainGroupID} key={i}>
                          {group.mainGroupID}
                        </option>
                      );
                    })
                  : null}
                {type == "R"
                  ? Object.values(rooms).map(function (room, i) {
                      return (
                        <option value={room._id} key={i}>
                          {room.roomName} - {room.building}
                        </option>
                      );
                    })
                  : null}
              </Form.Control>
            </Col>

            <Col className="mt-5">
              <Button variant="secondary" block onClick={printData}>
                Print
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default generateTimetable;
