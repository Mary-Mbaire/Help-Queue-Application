import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { formatDistanceToNow } from "date-fns";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tickets"), (snapshot) => {
      setTickets(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <strong>{ticket.name}</strong>: {ticket.issue} <br />
            Added{" "}
            {ticket.createdAt
              ? formatDistanceToNow(ticket.createdAt.toDate())
              : "just now"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
