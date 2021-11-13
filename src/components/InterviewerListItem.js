import React from "react";
import classNames from "classnames"

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected, setInterviewer } = props;

  let interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  });

  return (
    <li
      onClick={() => setInterviewer(id)}
      className={interviewersClass}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {(selected) ? name : ""}
    </li>
  );
}