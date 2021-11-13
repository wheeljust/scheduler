import React from "react";
import DayListItem from "components/DayListItem"

export default function DayList(props) {

  //Extract the props to variables to keep code DRY
  const { days, value, onChange } = props;

  //.map over the days array to create a new array called dayList containing all of the DayListItem components
  const dayList = days.map((day) => {

    const dayProps = {
      key: day.id,
      name: day.name,
      spots: day.spots,
      selected: (day.name === value),
      setDay: () => onChange(day.name)
    };

    return <DayListItem {...dayProps} />;

  });

  //return the array of the DayListItem components as a list
  return (
    <ul>
      {dayList}
    </ul>
  );
}