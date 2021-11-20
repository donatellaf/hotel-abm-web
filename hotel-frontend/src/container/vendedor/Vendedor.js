import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Actions from "../../components/actions";
import FormVendedor from "./Form";
import TableHeader from "../../components/baseTable/TableHeader";
import { httpDelete, httpGet } from "../../utils/httpFunctions";

const Vendedor = () => {
  const [openModal, setOpenModal] = useState(false);
  const [vendedor, setVendedor] = useState(null);
  const [object, setObjectSelect] = useState(null);

  const fetchVendedor = () => {
    httpGet("vendedor/").then((data) => setVendedor(data));
  };

  useEffect(fetchVendedor, []);

  const handleCreateVendedor = () => {
    setObjectSelect(null);
    setOpenModal(true);
  };

  const handleDeleteRow = (data) =>
    httpDelete(`vendedor/${data.id}/`).then(() => fetchVendedor());

  return (
    <>
      <TableHeader
        title="Lista de vendedores"
        textButton="Agregar vendedores"
        onClick={handleCreateVendedor}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell>Direccion</TableCell>
              <TableCell>Localidad</TableCell>
              <TableCell>Sueldo</TableCell>
              <TableCell>Observacion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendedor?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.documento}</TableCell>
                <TableCell>{row.telefono}</TableCell>
                <TableCell>{row.direccion}</TableCell>
                <TableCell>{row.localidad}</TableCell>
                <TableCell>{row.sueldo}</TableCell>
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
      <FormVendedor
        openModal={openModal}
        setOpenModal={setOpenModal}
        initialValues={object}
      />
    </>
  );
};

export default Vendedor;
