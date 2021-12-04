import { useReducer, useEffect } from "react";
import axios from "axios";

//Constants & helpers
import { SET_DAY, SET_APPLICATION_DATA, SET_INTERVIEW } from "helpers/constants";
import reducer from "helpers/reducer";


export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
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
      const days = all[0].data;
      const appointments = all[1].data;
      const interviewers = all[2].data;

      dispatch({ type: SET_APPLICATION_DATA, days, appointments, interviewers });
    })
  }, []);

  const setDay = (day) => dispatch({ type: SET_DAY, day });

  /**
 * bookInterview
 * @param {Number} id the appointment id 
 * @param {Object} interview contains student name and interviewer id
 * @param {Boolean} isUpdate true when an existing interview is being edited
 * @returns {Promise} axios put request that updates the appointments state
 */
  const bookInterview = (id, interview, isUpdate) => {
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        dispatch({
          type: SET_INTERVIEW,
          id,
          interview,
          changeSpots: (isUpdate ? "NONE" : "DECREMENT")
        })
      });
  };

  /**
  * cancelInterview
  * @param {Number} id the appointment id 
  * @returns {Promise} axios delete request that updates the appointments state
  */
  const cancelInterview = (id) => {
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        dispatch({
          type: SET_INTERVIEW,
          id,
          interview: null,
          changeSpots: "INCREMENT"
        })
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};