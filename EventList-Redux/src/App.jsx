import React, { useState } from 'react'
import './App.css'
import { Provider } from "react-redux";
import store from "./Redux/store";
import EventList from "./Components/EventList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EventList />
      </Provider>
    </div>
  )
}

export default App
