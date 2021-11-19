export const getAppointmentsForDay = (state, selectedDay) => {
  const { days, appointments } = state;

  // If no days data was found, return an empty array
  if (!days.length) {
    return [];
  }

  let appointmentArray;
  for (const day of days) {
    if (day.name === selectedDay) {
      appointmentArray = day.appointments;
      break;
    }
  };

  // No day.name in the daysArray matching the selected day
  if (!appointmentArray) {
    return [];
  }

  const appointmentDetails = appointmentArray.reduce((results, id) => {
    results.push(appointments[id]);
    return results;
  }, [])

  return appointmentDetails;
}