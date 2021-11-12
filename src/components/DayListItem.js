import React from "react";
import classNames from "classnames"

import "./DayListItem.scss";

export default function DayListItem(props) {
  const { name, spots, selected, setDay } = props;

  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  });

  const formatSpots = () => {
    return (spots) ? `${spots} spot${(spots > 1) ? "s" : ""} remaining` : `no spots remaining`;
  }

  return (
    <li
      onClick={() => setDay(name)}
      className={dayClass}
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}