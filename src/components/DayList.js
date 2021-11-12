import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props) {

  //Extract the props to variables to keep code DRY
  const { days, day, setDay } = props;

  //.map over the days array to create a new array called dayList containing all of the DayListItem components
  const dayList = days.map((currentDay) => {

    const dayListItemProps = {
      ...currentDay,
      key: currentDay.id,
      selected: (currentDay.name === day),
      setDay
    };

    return <DayListItem {...dayListItemProps} />;

  });

  //return the array of the DayListItem components as a list
  return (
    <ul>
      {dayList}
    </ul>
  );
}