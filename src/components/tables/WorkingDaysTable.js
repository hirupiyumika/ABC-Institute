import React from "react";
import { Container, Alert } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { DaysAndHoursConsumer } from "./../../context/DaysAndHoursProvider";
import WorkingDaysItem from "./WorkingDaysItem";

const WorkingDaysTable = () => {
  return (
    <DaysAndHoursConsumer>
      {(value) => {
        const { workingDays, filterWorkingDays, deleteWorkingDays } = value;

        return (
          <Container>
            {workingDays.length == 0 ? (
              <Alert variant="danger">Oops... No working days added!</Alert>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Day</th>

                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {workingDays.map((workingDays) => (
                    <WorkingDaysItem
                      key={workingDays._id}
                      workingDays={workingDays}
                      deleteWorkingDays={deleteWorkingDays}
                      filterWorkingDays={filterWorkingDays}
                    />
                  ))}
                </tbody>
              </Table>
            )}
          </Container>
        );
      }}
    </DaysAndHoursConsumer>
  );
};

export default WorkingDaysTable;
