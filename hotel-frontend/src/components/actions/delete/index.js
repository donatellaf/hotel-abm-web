import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const DeleteButton = styled(IconButton)(({ theme }) => ({
  root: {
    padding: "5px",
    "&:hover": {
      backgroundColor: "#DDF2F1",
    },
  },
  color: "red",
}));

const Delete = ({ setDetele, object }) => {
  return (
    <>
      <DeleteButton
        onClick={() => {
          setDetele(object);
        }}
      >
        <DeleteIcon />
      </DeleteButton>
    </>
  );
};

export default Delete;
