import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { httpPost } from "../../utils/httpFunctions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formValues, handleInputChange] = useForm();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await httpPost("register/", formValues);
    navigate("./login");
  };
  return (
    <Paper elevation={15} sx={{ width: 500 }}>
      <form onSubmit={handleRegister}>
        <Grid container spacing={3} p={5} textAlign="center">
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Registro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Usuario"
              name="username"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              name="password"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField helperText=" " label="Repita contraseña" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "end", marginTop: -5 }}>
            <Link href="/login">
              <Typography variant="caption">
                Ya tenes cuenta ? Ingresa
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 200, height: 50 }}
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Register;
