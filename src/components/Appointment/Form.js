import React, { useState } from "react";
import Button from '../Button';
import InterviewerList from '../InterviewerList';

export default function Form(props) {
  const { interviewers, onSave, onCancel, isUpdate } = props;

  //If the form receives state values for the student and interviewer, then these values should appear initially
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //Reset the state values in the form
  const reset = () => {
    setStudent("");
    setInterviewer(null);
    setError("");
  };

  //Reset the form and call whatever function is passed to the form as onCancel
  const cancel = () => {
    reset();
    onCancel();
  };

  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    };

    setError("");
    onSave(student, interviewer, isUpdate);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            data-testid="student-name-input"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          value={interviewer}
          onChange={setInterviewer}
          interviewers={interviewers}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm /*disabled={!student || !interviewer}*/ onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};