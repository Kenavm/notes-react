import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteType from "./types/NoteType";
import Note from "./components/Note";

let filtered = false;

function App() {
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [filteredNotesByType, setFilteredNotesByType] = useState<
    Array<NoteType>
  >([]);

  const options = ["Work", "Personal"];

  function newNote() {
    let id = Math.floor(Math.random() * 1000000);
    if (filtered) {
      setFilteredNotesByType([
        ...filteredNotesByType,
        { id: id, text: "", type: "Work" },
      ]);
    } else {
      setNotes([...notes, { id: id, text: "", type: "Work" }]);
    }
  }

  function filterNotes(type: string) {
    if (type !== "Both") {
      filtered = true;
      setFilteredNotesByType(
        notes.filter((note) => note.type === type)
      );
    } else {
      filtered = false;
      setFilteredNotesByType(notes);
    }
  }

  function deleteNote(id: number) {
    if (filtered) {
      setFilteredNotesByType(
        filteredNotesByType.filter((note) => note.id !== id)
      );
    } else {
      setFilteredNotesByType(notes.filter((note) => note.id !== id));
    }
  }

  function changeType(id: number, type: string) {
    if (filtered) {
      setFilteredNotesByType(
        filteredNotesByType.map((note) =>
          note.id === id ? { ...note, type: type } : note
        )
      );
    } else {
      setNotes(
        notes.map((note) =>
          note.id === id ? { ...note, type: type } : note
        )
      );
    }
  }
  return (
    <div>
      <Header newNote={newNote} filterNotes={filterNotes} />
    
      <div>
        {filtered ? (
          <Note
            changeType={changeType}
            deleteNote={deleteNote}
            notes={filteredNotesByType}
            options={options}
          />
        ) : (
          <Note
            changeType={changeType}
            deleteNote={deleteNote}
            notes={notes}
            options={options}
          />
        )}
      </div>
    </div>
  );
}

export default App;
