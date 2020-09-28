// IT18233704 -  N.R Yamasinghe
import React from "react";
import Button from "react-bootstrap/Button";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import EditButton from "./../common/EditButton";
import DeleteButton from "./../common/DeleteButton";

const AcademicYearAndSemesterItem = ({
  academicYearAndSemester: {
    _id,
    year,
    semester,
    createdDate,
    yearAndSemester,
  },
  deleteAcademicYearAndSemester,
  filterAcademicYearAndSemester,
}) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{semester}</td>
      <td>{yearAndSemester}</td>
      <td>
        <Moment format="MMMM Do YYYY">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Moment format="h:mm:ss a">{new Date(createdDate)}</Moment>
      </td>
      <td>
        <Link to="/updateAcademicYearAndSemester">
          <Button
            variant="primary"
            size="sm"
            onClick={() => filterAcademicYearAndSemester(_id)}
          >
            <EditButton />
          </Button>
        </Link>
      </td>
      <td>
        <Button
          variant="danger"
          size="sm"
          onClick={() => deleteAcademicYearAndSemester(_id)}
        >
          <DeleteButton />
        </Button>
      </td>
    </tr>
  );
};

export default AcademicYearAndSemesterItem;
