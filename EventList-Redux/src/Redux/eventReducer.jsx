import {
    FETCH_EVENTS,
    ADD_EVENT,
    EDIT_EVENT,
    DELETE_EVENT,
    SET_EDIT_INDEX,
    SET_ADDING,
  } from "./eventTypes";
  
  const initialState = {
    events: [],
    editIndex: null,
    isAdding: false,
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EVENTS:
        return { ...state, events: action.payload };
      case ADD_EVENT:
        return {
          ...state,
          events: [...state.events, action.payload],
          isAdding: false,
        };
      case EDIT_EVENT:
        const updatedEvents = [...state.events];
        updatedEvents[action.payload.index] = action.payload.updatedEvent;
        return { ...state, events: updatedEvents, editIndex: null };
      case DELETE_EVENT:
        return {
          ...state,
          events: state.events.filter((event) => event.id !== action.payload),
        };
      case SET_EDIT_INDEX:
        return { ...state, editIndex: action.payload };
      case SET_ADDING:
        return { ...state, isAdding: action.payload };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  