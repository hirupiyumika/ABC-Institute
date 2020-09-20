import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const WokringHoursItem = ({
  workingDays: { _id, day, startingHours, endingHours },
  deleteWorkingHours,
  filterWorkingDays,
}) => {
  return (
    <tr>
      <td>{day}</td>
      <td>
        <input
          style={{ border: "none", backgroundColor: "auto" }}
          type="time"
          value={startingHours}
          disabled
        />
      </td>
      <td>
        <input
          style={{ border: "none", backgroundColor: "auto" }}
          type="time"
          value={endingHours}
          disabled
        />
      </td>
      <td>
        <Link to="/updateWorkingHours">
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
          onClick={() => deleteWorkingHours(_id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default WokringHoursItem;
