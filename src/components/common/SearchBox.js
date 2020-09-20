import React from "react";
import Form from "react-bootstrap/Form";

const SearchBox = ({ handleChange, search, placeholder }) => {
  return (
    <Form.Control
      icon="search"
      type="text"
      placeholder={placeholder}
      aria-label="Search"
      name="search"
      id="search"
      onChange={handleChange}
      value={search}
    />
  );
};

export default SearchBox;
