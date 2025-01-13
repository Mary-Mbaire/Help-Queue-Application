import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import TicketList from "./TicketList";
import AddTicket from "./AddTicket";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-ticket"
          element={
            <PrivateRoute>
              <AddTicket />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
