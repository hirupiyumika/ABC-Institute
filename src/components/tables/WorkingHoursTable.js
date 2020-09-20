import React from "react";

import { Table, Container, Alert } from "react-bootstrap";
import { DaysAndHoursConsumer } from "../../context/DaysAndHoursProvider";
import WorkingHoursItem from "./WorkingHoursItem";

const WorkingHoursTable = () => {
  return (
    <DaysAndHoursConsumer>
      {(value) => {
        const { workingDays, filterWorkingDays, deleteWorkingHours } = value;

        return (
          <Container>
            {workingDays.length == 0 ? (
              <Alert variant="danger">Oops... No working days added!</Alert>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Starting Hours</th>
                    <th>Ending Hours</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {workingDays.map((workingDays) => (
                    <WorkingHoursItem
                      key={workingDays._id}
                      workingDays={workingDays}
                      deleteWorkingHours={deleteWorkingHours}
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

export default WorkingHoursTable;
