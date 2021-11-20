import React from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

const EditButton = styled(IconButton)(({ theme }) => ({
  root: {
    padding: "5px",
    "&:hover": {
      backgroundColor: "#DDF2F1",
    },
  },
  color: "green",
}));

const Edit = ({ setOpenForm, setObjectSelect, object }) => {
  return (
    <>
      <EditButton
        onClick={() => {
          setOpenForm(true);
          setObjectSelect(object);
        }}
      >
        <EditIcon />
      </EditButton>
    </>
  );
};

export default Edit;
