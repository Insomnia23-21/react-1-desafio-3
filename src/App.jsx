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
  const [mensaje, setMensaje] = useState("");
  const [mensajeTipo, setMensajeTipo] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setMensaje("Colaborador agregado !");
    setMensajeTipo("success");
    setTimeout(() => setMensaje(""), 3000);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  return (
    <div className="container my-4">
      <h1>Lista de colaboradores</h1>
      <Buscador
        colaboradores={colaboradores}
        setColaboradores={setColaboradores}
      />
      <Listado
        colaboradores={colaboradores}
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
