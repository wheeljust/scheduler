/**
* updateSpotsRemaining
* @param {Array} days a copy of the current days state
* @param {String} day the current state.days
* @param {Integer} changeAmt either +/- 1 depending on the update type when called
* @returns a new days array with the updatedSpots remaining for the current day
 */

export default function updateSpotsRemaining(days, day, changeAmt) {
  const dayIndex = days.findIndex(currentDay => currentDay.name === day);
  const currentSpots = days[dayIndex].spots

  days[dayIndex].spots = currentSpots + changeAmt;
  return days;
};