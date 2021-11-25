import { SET_DAY, SET_APPLICATION_DATA, SET_INTERVIEW } from "./constants";
import updateSpotsRemaining from "./updateSpotsRemaining";

export default function reducer(state, action) {
  switch (action.type) {

    case SET_DAY:
      return { ...state, day: action.day }

    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      }

    case SET_INTERVIEW: {
      const appointment = {
        ...state.appointments[action.id],
        interview: action.interview
      };

      const appointments = {
        ...state.appointments,
        [action.id]: appointment
      };

      let days = [...state.days];
      if (action.changeSpots === "DECREMENT") {
        days = updateSpotsRemaining(state.days, state.day, -1);
      }
      if (action.changeSpots === "INCREMENT") {
        days = updateSpotsRemaining(state.days, state.day, 1);
      }

      return {
        ...state,
        appointments,
        days
      }
    }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};