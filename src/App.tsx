import { useState } from "react";
import "./App.css";
import Note from "./Note";

function App() {
  const [notes, setNote] = useState<Array<Note>>([]);

  const options = ["Work", "Personal"];

  function newNote() {
    let id = notes.length;

    setNote([...notes, { id: id + 1, text: "", workOrPersonal: "Work" }]);
    console.log(id)
  }

  function deleteNote(id: number) {
    setNote(notes.filter((note) => note.id !== id));
  }

  function changeType(id: number, value: String) {
    setNote(
      notes.map((note) =>
        note.id === id ? { ...note, workOrPersonal: value } : note
      )
    );
  }

  return (
    <div>
      <div className="header">
        <h1>Notes</h1>
        <button onClick={() => newNote()} className="new-note">
          New
        </button>
      </div>

      <div className="note-wrapper">
        {notes.map((note) => (
          <div
            key={note.id}
            className={
              note.workOrPersonal === "Work" ? "note-work" : "note-personal"
            }
          >
            {" "}
            <textarea placeholder="Type to add a note...." className={
              note.workOrPersonal === "Work" ? "textarea-work" : "textarea-personal"
            } ></textarea>
            <div className="note-options">
              <select
                className="type-of-note"
                onChange={(e) => changeType(note.id, e.target.value)}
              >
                {" "}
                {options.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
              <button className="delete" onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
