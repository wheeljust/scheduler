import React from "react";
import "./styles.scss";

//Appointment components
import Header from "./Header"
import Show from "./Show"
import Empty from "./Empty"
import Form from "./Form"

//Helpers and hooks
import useVisualMode from "hooks/useVisualMode";

//Mode constant variables
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode((props.interview) ? SHOW : EMPTY);

  return (
    <article className="appointment">

      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
        />
      )}


    </article>
  );
}