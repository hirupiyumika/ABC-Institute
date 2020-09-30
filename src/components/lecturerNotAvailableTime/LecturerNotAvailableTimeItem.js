// IT18233704 -  N.R Yamasinghe
import React from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const LecturerNotAvailableTimeItem = ({
  item: { _id, lecturer, createdDate, day, from, to },
  deleteLecturerNotAvailableTimes,
  filterLecturerNotAvailableTime,
}) => {
  return (
    <tr>
      <td>{lecturer}</td>
      <td>{day}</td>
      <td>{from}</td>
      <td>{to}</td>
      <td>
        <Moment format="MMMM Do YYYY">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Moment format="h:mm:ss a">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Link to="/updateLecturerNotAvailableTime">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterLecturerNotAvailableTime(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteLecturerNotAvailableTimes(_id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default LecturerNotAvailableTimeItem;
