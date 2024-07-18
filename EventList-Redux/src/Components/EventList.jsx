import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventForm from "./EventForm";
import EventItem from "./EventItem";

import {
  fetchEvents,
  addEvent,
  editEvent,
  deleteEvent,
  setEditIndex,
  setAdding,
} from "../Redux/eventActions";

export default function EventList() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const editIndex = useSelector((state) => state.editIndex);
  const isAdding = useSelector((state) => state.isAdding);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleAddEvent = (event) => {
    dispatch(addEvent(event));
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
  };

  const handleEditEvent = (index) => {
    dispatch(setEditIndex(index));
  };

  const handleSaveEvent = (event) => {
    dispatch(editEvent(event, editIndex));
  };

  const handleCancel = () => {
    dispatch(setAdding(false));
    dispatch(setEditIndex(null));
  };

  return (
    <div>
      <button className="add-event" onClick={() => dispatch(setAdding(true))}>
        Add New Event
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <EventItem
              key={event.id}
              event={event}
              onDelete={() => handleDeleteEvent(event.id)}
              onEdit={() => handleEditEvent(index)}
              onSave={handleSaveEvent}
              onCancelEdit={handleCancel}
              isEditing={editIndex === index}
            />
          ))}
          {isAdding && (
            <tr>
              <td colSpan="4">
                <EventForm
                  onSave={handleAddEvent}
                  onCancel={handleCancel}
                  isEditing={editIndex !== null}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
