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
      <h1 className="mt-3 mb-3">Notes</h1>
      {notes.map((note, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h3 className="card-title">{note.title}</h3>
            <p className="card-text">{note.content} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
