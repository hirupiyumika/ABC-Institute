// IT18233704 -  N.R Yamasinghe
import React from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import EditButton from "../common/EditButton";
import DeleteButton from "../common/DeleteButton";

const SubGroupItem = ({
  subGroup: { _id, subGroup, createdDate },
  deleteSubGroup,
  filterSubGroup,
}) => {
  return (
    <tr>
      <td>{subGroup}</td>
      <td>
        <Moment format="MMMM Do YYYY">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Moment format="h:mm:ss a">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Link to="/updateSubGroup">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterSubGroup(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={() => deleteSubGroup(_id)}>
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default SubGroupItem;
