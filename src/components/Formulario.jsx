import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Formulario.css";

function Formulario({ agregarColaborador, setMensaje, setMensajeTipo }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setMensaje("Completa todos los campos !");
      setMensajeTipo("danger");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }
    const nuevoColaborador = {
      id: Date.now().toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };
    agregarColaborador(nuevoColaborador);
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <div className="form-container">
      <h3>Agregar colaborador</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Nombre del colaborador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email del colaborador"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            placeholder="Edad del colaborador"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Teléfono del colaborador"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Agregar colaborador
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
