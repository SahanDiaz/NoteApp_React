import React, { useState, useEffect } from "react";
// import Note from "../../../models/noteModel";

function Notes() {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
  });

  return (
    <div className="container">
      <h1>Notes</h1>
      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content} </p>
        </div>
      ))}
    </div>
  );
}

export default Notes;
