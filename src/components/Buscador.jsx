import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function Buscador({ colaboradores, setFiltrados }) {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda === "") {
      setFiltrados(colaboradores);
    } else {
      setFiltrados(
        colaboradores.filter(
          (colaborador) =>
            colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.edad.includes(busqueda) ||
            colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.telefono.includes(busqueda)
        )
      );
    }
  }, [busqueda, colaboradores, setFiltrados]);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
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
