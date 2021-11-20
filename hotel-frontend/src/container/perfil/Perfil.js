import { Paper, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { httpGet } from "../../utils/httpFunctions";

const Perfil = () => {
  const [me, setMe] = useState("");

  const { username } = me;

  const fetchPerfil = () => {
    httpGet("me/").then((res) => {
      setMe(res);
    });
  };

  useEffect(fetchPerfil, []);

  return (
    <Paper>
      <Grid container p={5}>
        <Typography>Bienvenid@ {username}</Typography>
      </Grid>
    </Paper>
  );
};

export default Perfil;
