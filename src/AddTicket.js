import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { formatDistanceToNow } from "date-fns";

const AddTicket = () => {
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "tickets"), {
        name,
        issue,
        createdAt: serverTimestamp(),
      });
      alert("Ticket added successfully!");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
      />
      <button type="submit">Add Ticket</button>
    </form>
  );
};

export default AddTicket;
