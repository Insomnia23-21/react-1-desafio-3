import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Buscador({ colaboradores, setColaboradores }) {
  const [busqueda, setBusqueda] = useState("");

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    setColaboradores(
      colaboradores.filter(
        (colaborador) =>
          colaborador.nombre
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          colaborador.correo
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          colaborador.edad.includes(e.target.value) ||
          colaborador.cargo
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          colaborador.telefono.includes(e.target.value)
      )
    );
  };

  return (
    <Form.Control
      type="text"
      placeholder="Busca un colaborador"
      value={busqueda}
      onChange={handleSearch}
      className="my-3"
    />
  );
}

export default Buscador;
