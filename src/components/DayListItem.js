import React from "react";
import classNames from "classnames"

import "./DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  const formatSpots = () => {
    return (props.spots) ? `${props.spots} spot${(props.spots > 1) ? "s" : ""} remaining` : `no spots remaining`;
  }

  return (
    <li
      onClick={() => props.setDay(props.name)}
      className={dayClass}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}