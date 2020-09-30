// IT18233704 -  N.R Yamasinghe
import React from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const GroupNotAvailableTimeItem = ({
  item: { _id, group, createdDate, day, from, to },
  deleteGroupNotAvailableTimes,
  filterGroupNotAvailableTime,
}) => {
  return (
    <tr>
      <td>{group}</td>
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
        <Link to="/updateGroupNotAvailableTime">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterGroupNotAvailableTime(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteGroupNotAvailableTimes(_id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default GroupNotAvailableTimeItem;
