import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteType from "./NoteType";
import Note from "./components/Note";
import FilteredNoteComponent from "./components/FilteredNotes";

let filtered = false;

function App() {
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [filteredNotes, setFilteredNotes] = useState<Array<NoteType>>([]);

  const options = ["Work", "Personal"];

  function newNote() {
    let id = notes.length+1;
    if(filtered) {}
    setNotes([...notes, { id: id, text: "", workOrPersonal: "Work" }]);
  }

  function filterNotes(workOrPersonal: string) {
    console.log(workOrPersonal);
    if (workOrPersonal !== "Both") {
      filtered = true;
      console.log(filtered);
      setFilteredNotes(
        notes.filter((note) => note.workOrPersonal === workOrPersonal)
      );
    } else {
      filtered = false;
      console.log(filtered)
      setNotes(notes);
    }
  }

  function deleteNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function changeType(id: number, value: string) {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, workOrPersonal: value } : note
      )
    );
  }

  return (
    <div>
      <Header newNote={newNote} filterNotes={filterNotes} />

      <div>
        {filtered ? (
          <FilteredNoteComponent
            changeType={changeType}
            deleteNote={deleteNote}
            options={options}
            filteredNotes={filteredNotes}
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
