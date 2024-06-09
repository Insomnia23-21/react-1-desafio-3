import React, { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtrados, setFiltrados] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState("");
  const [mensajeTipo, setMensajeTipo] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    const nuevosColaboradores = [...colaboradores, nuevoColaborador];
    setColaboradores(nuevosColaboradores);
    setFiltrados(nuevosColaboradores);
    setMensaje("Colaborador agregado !");
    setMensajeTipo("success");
    setTimeout(() => setMensaje(""), 3000);
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setFiltrados(nuevosColaboradores);
  };

  return (
    <div className="container my-4">
      <h1>Lista de colaboradores</h1>
      <Buscador
        colaboradores={colaboradores}
        setFiltrados={setFiltrados}
      />
      <Listado
        colaboradores={filtrados}
        eliminarColaborador={eliminarColaborador}
      />
      <Formulario
        agregarColaborador={agregarColaborador}
        setMensaje={setMensaje}
        setMensajeTipo={setMensajeTipo}
      />
      {mensaje && <Alert mensaje={mensaje} tipo={mensajeTipo} />}
    </div>
  );
}

export default App;
