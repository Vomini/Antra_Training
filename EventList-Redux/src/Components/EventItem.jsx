import React, { useState, useEffect } from "react";

export default function EventItem({
  event,
  onDelete,
  onEdit,
  onCancelEdit,
  onSave,
  isEditing,
}) {
  const [editedEvent, setEditedEvent] = useState(event);

  useEffect(() => {
    if (isEditing) {
      setEditedEvent(event);
    }
  }, [event, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  const handleSave = () => {
    onSave(editedEvent);
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              name="eventName"
              value={editedEvent.eventName}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="date"
              name="startDate"
              value={editedEvent.startDate}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="date"
              name="endDate"
              value={editedEvent.endDate}
              onChange={handleChange}
            />
          </td>
          <td>
            <button className="save-button" onClick={handleSave}>
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
            </button>
            <button className="cancel-button" onClick={onCancelEdit}>
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
          </td>
        </>
      ) : (
        <>
          <td>{event.eventName}</td>
          <td>{event.startDate}</td>
          <td>{event.endDate}</td>
          <td>
            <button className="edit-button" onClick={onEdit}>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="EditIcon"
                aria-label="fontSize small"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </button>
            <button className="delete-button" onClick={onDelete}>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DeleteIcon"
                aria-label="fontSize small"
              >
                <path
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
