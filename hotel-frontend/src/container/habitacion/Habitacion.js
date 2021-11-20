import Paper from "@mui/material/Paper";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Actions from "../../components/actions";
import FormHabitacion from "./Form";
import TableHeader from "../../components/baseTable/TableHeader";
import { httpDelete, httpGet } from "../../utils/httpFunctions";

const Habitacion = () => {
  const [openModal, setOpenModal] = useState(false);
  const [habitacion, setHabitacion] = useState(null);
  const [object, setObjectSelect] = useState(null);

  const fetchHabitacion = () => {
    httpGet("habitacion/").then((data) => setHabitacion(data));
  };

  useEffect(fetchHabitacion, []);

  const handleCreateHabitacion = () => {
    setObjectSelect(null);
    setOpenModal(true);
  };

  const handleDeleteRow = (data) =>
    httpDelete(`habitacion/${data.id}/`).then(() => fetchHabitacion());

  return (
    <>
      <TableHeader
        title="Lista de habitaciones"
        textButton="Agregar habitacion"
        onClick={handleCreateHabitacion}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nro Camas</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Observacion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {habitacion?.map((row, index) => (
              <TableRow key={index}>
                <TableCell> {row.nroCamas}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.precio}</TableCell>
                <TableCell>{row.tipo}</TableCell>
                <TableCell>{row.observacion}</TableCell>
                <TableCell>
                  <Actions
                    setOpenForm={setOpenModal}
                    object={row}
                    setObjectSelect={setObjectSelect}
                    setDetele={handleDeleteRow}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormHabitacion
        openModal={openModal}
        setOpenModal={setOpenModal}
        initialValues={object}
      />
    </>
  );
};

export default Habitacion;
