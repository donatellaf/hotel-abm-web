import { Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import BaseButton from "../../components/baseButton/BaseButton";
import { useForm } from "../../hooks/useForm";
import { httpPost, httpPut } from "../../utils/httpFunctions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const FormCliente = ({ openModal, setOpenModal, initialValues, onSave }) => {
  const [formValues, handleInputChange] = useForm();

  const handleSubmit = (e) => {
    const form = { ...initialValues, ...formValues };
    initialValues
      ? httpPut(`cliente/${initialValues.id}/`, form)
      : httpPost("cliente/", form);
  };

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <form onSubmit={handleSubmit}>
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="nombre"
                label="Nombre"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.nombre}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="documento"
                label="Dni"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.documento}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="direccion"
                label="Direccion"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.direccion}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="localidad"
                label="Localidad"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.localidad}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="observacion"
                label="Observacion"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.observacion}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="flex-end" mt={1}>
            <Grid item xs={4}>
              <BaseButton fullWidth title="Guardar" type="submit" />
            </Grid>
            <Grid item xs={4}>
              <BaseButton
                fullWidth
                title="Cancelar"
                variant="outlined"
                onClick={() => setOpenModal(false)}
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </Modal>
  );
};

export default FormCliente;
