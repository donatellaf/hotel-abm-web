import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Actions from "../../components/actions";
import FormCliente from "./Form";
import TableHeader from "../../components/baseTable/TableHeader";
import { httpDelete, httpGet } from "../../utils/httpFunctions";

const Cliente = () => {
  const [openModal, setOpenModal] = useState(false);
  const [clientes, setClientes] = useState(null);
  const [object, setObjectSelect] = useState(null);

  const fetchCliente = () => {
    httpGet("cliente/").then((data) => setClientes(data));
  };

  useEffect(fetchCliente, []);

  const handleCreateCliente = () => {
    setObjectSelect(null);
    setOpenModal(true);
  };

  const handleDeleteRow = (data) =>
    httpDelete(`cliente/${data.id}/`).then(() => fetchCliente());

  return (
    <>
      <TableHeader
        title="Lista de clientes"
        textButton="Agregar cliente"
        onClick={handleCreateCliente}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Direccion</TableCell>
              <TableCell>Localidad</TableCell>
              <TableCell>Observacion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.documento}</TableCell>
                <TableCell>{row.direccion}</TableCell>
                <TableCell>{row.localidad}</TableCell>
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
      <FormCliente
        openModal={openModal}
        setOpenModal={setOpenModal}
        initialValues={object}
      />
    </>
  );
};

export default Cliente;
