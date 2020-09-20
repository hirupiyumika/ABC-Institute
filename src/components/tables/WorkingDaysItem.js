import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import EditButton from "./../common/EditButton";
import DeleteButton from "./../common/DeleteButton";

const WorkingDaysItem = ({
  workingDays: { _id, day },
  deleteWorkingDays,
  filterWorkingDays,
}) => {
  return (
    <tr>
      <td>{day}</td>
      <td>
        <Link to="/updateWorkingDays">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterWorkingDays(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteWorkingDays(_id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default WorkingDaysItem;
