import React from "react";
import Typography from "@mui/material/Typography";
import BaseButton from "../../components/baseButton/BaseButton";

import Grid from "@mui/material/Grid";
const TableHeader = ({ title, textButton, onClick }) => {
  return (
    <>
      <Grid container spacing={2} p={5} justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Grid>
        <Grid item></Grid>
        <BaseButton title={textButton} onClick={onClick} />
      </Grid>
    </>
  );
};

export default TableHeader;
