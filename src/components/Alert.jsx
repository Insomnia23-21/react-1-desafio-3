import React from "react";
import { Alert as BootstrapAlert } from "react-bootstrap";

function Alert({ mensaje, tipo }) {
  return (
    <BootstrapAlert variant={tipo} className="mt-3">
      {mensaje}
    </BootstrapAlert>
  );
}

export default Alert;
