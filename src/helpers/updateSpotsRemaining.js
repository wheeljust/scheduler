/**
* updateSpotsRemaining
* @param {Array} days 
* @param {String} day 
* @param {Integer} changeAmt 
* @returns a new days array with the updatedSpots remaining for the current day
 */

export default function updateSpotsRemaining(days, day, changeAmt) {
  const dayIndex = days.findIndex(currentDay => currentDay.name === day);
  const currentSpots = days[dayIndex].spots

  days[dayIndex].spots = currentSpots + changeAmt;
  return days;
};