/**
* updateSpotsRemaining
* @param {Array} days a copy of the current days state
* @param {String} day the current state.days
* @param {Integer} changeAmt either +/- 1 depending on the update type when called
* @returns a new days array with the updatedSpots remaining for the current day
 */

export default function updateSpotsRemaining(days, day, changeAmt) {
  const index = days.findIndex(currentDay => currentDay.name === day);
  const dayObj = days[index];
  const currentSpots = dayObj.spots;

  //This will be the updated spots number for the current dayObj
  const spots = currentSpots + changeAmt;
  const newDay = { ...dayObj, spots };

  // Add the updated copy of the newDay Object into a newDays array
  const newDays = [...days];
  newDays[index] = newDay;

  return newDays;
};