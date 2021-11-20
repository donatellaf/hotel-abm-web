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

const FormHabitacion = ({ openModal, setOpenModal, initialValues, onSave }) => {
  const [formValues, handleInputChange] = useForm();

  const handleSubmit = (e) => {
    const form = { ...initialValues, ...formValues };
    initialValues
      ? httpPut(`habitacion/${initialValues.id}/`, form)
      : httpPost("habitacion/", form);
  };

  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <form onSubmit={handleSubmit}>
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="nroCamas"
                label="Nro Camas"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.nroCamas}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="descripcion"
                label="Descripcion"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.descripcion}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="precio"
                label="Precio"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.precio}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="tipo"
                label="Tipo"
                variant="outlined"
                onChange={handleInputChange}
                defaultValue={initialValues?.tipo}
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

export default FormHabitacion;
