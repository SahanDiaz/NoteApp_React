import React, { useState } from "react";
import axios from "axios";

function CreateNote() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const HandleChange = (event) => {
    const { name, value } = event.target;

    setInput((preInput) => {
      return {
        ...preInput,
        [name]: value,
      };
    }, []);
  };

  const HandleClick = (event) => {
    event.preventDefault();
    const newNote = {
      title: input.title,
      content: input.content,
    };
    axios.post("http://localhost:3001/create", newNote);
  };

  return (
    <div className="container">
      <h1 className="mb-3 mt-3 row">CreateNotes</h1>
      <form>
        <div className="mb-3 row ">
          <input
            onChange={HandleChange}
            name="title"
            autoComplete="off"
            className="form-control shadow"
            placeholder="note title"
            value={input.title}
          ></input>
        </div>
        <div className="mb-3 row">
          <textarea
            onChange={HandleChange}
            name="content"
            className="shadow "
            autoComplete="off"
            placeholder="note text"
            value={input.content}
          ></textarea>
        </div>
        <div>
          <button
            onClick={HandleClick}
            type="submit"
            className="btn btn-primary shadow"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
