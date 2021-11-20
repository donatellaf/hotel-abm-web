import React from "react";
import Delete from "./delete";
import Edit from "./edit";
import ButtonGroup from "@mui/material/ButtonGroup";

const Actions = (props) => {
  return (
    <>
      <ButtonGroup>
        <Edit {...props} />
        <Delete {...props} />
      </ButtonGroup>
    </>
  );
};

export default Actions;
