import React from "react";
import InterviewerListItem from "components/InterviewerListItem"
import "./InterviewerList.scss";

export default function InterviewerList(props) {

  //Extract the props to variables to keep code DRY
  const { interviewers, interviewer, setInterviewer } = props;

  //.map over the interviewers array to create a new array called interviewerList containing all of the InterviewerListItem components
  const interviewerList = interviewers.map((currentInterviewer) => {

    const interviewerProps = {
      key: currentInterviewer.id,
      name: currentInterviewer.name,
      avatar: currentInterviewer.avatar,
      selected: (currentInterviewer.id === interviewer),
      setInterviewer: () => setInterviewer(currentInterviewer.id)
    };

    return <InterviewerListItem {...interviewerProps} />;

  });

  //return the array of the components as a list with a heading
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  );
}