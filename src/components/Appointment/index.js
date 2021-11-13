import React from "react";
import "./styles.scss";

export default function Appointment(props) {

  return (
    <article className="appointment">
      {!props.time && <h2>No appointments</h2>}
      {props.time && <h2>Appointment at {props.time}</h2>}

    </article>
  );
}