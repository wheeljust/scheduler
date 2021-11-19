/**
 * getAppointmentsForDay
 * @param {Object} state includes key value pairs of the tracked state
 * @param {String} selectedDay the current value of the "day" state
 * @returns {Array} containing appointment objects related to the selectedDay
 */
export const getAppointmentsForDay = (state, selectedDay) => {
  const { days, appointments } = state;

  // If no days data was found, return an empty array
  if (!days.length) return [];

  let appointmentArray;
  for (const day of days) {
    if (day.name === selectedDay) {
      appointmentArray = day.appointments;
      break;
    }
  };

  // No day.name in the daysArray matching the selected day
  if (!appointmentArray) return [];

  const appointmentDetails = appointmentArray.reduce((results, id) => {
    results.push(appointments[id]);
    return results;
  }, [])

  return appointmentDetails;
};

/**
 * getInterview
 * @param {Object} state includes key value pairs of the tracked state
 * @param {Object} interview consists of the students name and the interviewer's id
 * @returns {Object} revised version of the interview, with the interviewers details fetched from the state.interviewers
 */
export const getInterview = (state, interview) => {
  if (!interview) return null;

  const interviewerID = interview.interviewer;
  const newInterview = { ...interview, interviewer: state.interviewers[interviewerID] }

  return newInterview
};