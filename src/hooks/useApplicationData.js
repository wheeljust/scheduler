import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //Resolve all promises that fetch API data and then setState
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, []);

  /**
   * setDay
   * @param {String} day name of the day
   * no return, setState runs and updates the active day
   */
  const setDay = day => setState({ ...state, day });

  /**
 * bookInterview
 * @param {Number} id the appointment id 
 * @param {Object} interview contains student name and interviewer id
 * @returns {Promise} axios put request that updates the appointments state
 */
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => setState({ ...state, appointments }))
  };

  /**
  * cancelInterview
  * @param {Number} id the appointment id 
  * @returns {Promise} axios delete request that updates the appointments state
  */
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments }));
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};