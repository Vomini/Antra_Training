import React, { useState, useEffect } from "react";

export default function EventForm({ onSave, onCancel, isEditing }) {
  const [event, setEvent] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(event);
    setEvent({ eventName: "", startDate: "", endDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="eventName"
        placeholder="Event Name"
        value={event.eventName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="startDate"
        value={event.startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        value={event.endDate}
        onChange={handleChange}
      />
      <button className="save-button" type="submit">
        {isEditing ? (
          // Save icon
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"
              fill="#FFFFFF"
            />
          </svg>
        ) : (
          // Plus icon
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6V18M18 12H6"
              stroke="#FFFFFF"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>

      <button type="button" className="cancel-button" onClick={onCancel}>
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </button>
    </form>
  );
}
