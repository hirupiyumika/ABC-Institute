// IT18233704 -  N.R Yamasinghe
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";
import { LogContext } from "./../../context/context";
const SessionNotAvailableTimeItem = ({
  item: { _id, primarySession, createdDate, day, from, to },
  deleteSessionNotAvailableTimes,
  filterSessionNotAvailableTime,
}) => {
  const { primarySessions } = useContext(LogContext);
  const value = primarySessions.filter((item) => item._id === primarySession);

  return (
    <tr>
      <td>
        {`${value[0].lecturers} ${value[0].tag} ${value[0].group} ${value[0].subject} ${value[0].stdCount} ${value[0].duration}`}
      </td>
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
        <Link to="/updateSessionNotAvailableTime">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterSessionNotAvailableTime(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteSessionNotAvailableTimes(_id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default SessionNotAvailableTimeItem;
