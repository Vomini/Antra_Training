import {
    FETCH_EVENTS,
    ADD_EVENT,
    EDIT_EVENT,
    DELETE_EVENT,
    SET_EDIT_INDEX,
    SET_ADDING,
  } from "./eventTypes";
  
  export const fetchEvents = () => async (dispatch) => {
    const response = await fetch("http://localhost:3000/events");
    const data = await response.json();
    dispatch({ type: FETCH_EVENTS, payload: data });
  };
  
  export const addEvent = (event) => async (dispatch) => {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    const newEvent = await response.json();
    dispatch({ type: ADD_EVENT, payload: newEvent });
  };
  
  export const editEvent = (event, index) => async (dispatch) => {
    const response = await fetch(`http://localhost:3000/events/${event.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    const updatedEvent = await response.json();
    dispatch({ type: EDIT_EVENT, payload: { updatedEvent, index } });
  };
  
  export const deleteEvent = (id) => async (dispatch) => {
    await fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: DELETE_EVENT, payload: id });
  };
  
  export const setEditIndex = (index) => ({
    type: SET_EDIT_INDEX,
    payload: index,
  });
  export const setAdding = (isAdding) => ({
    type: SET_ADDING,
    payload: isAdding,
  });
  