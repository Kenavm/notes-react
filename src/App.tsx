import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteContainer from "./components/Note";
import Note from './Note'

function App() {
  const [notes, setNote] = useState<Array<Note>>([]);

  const options = ["Work", "Personal"];

  function newNote() {
    let id = notes.length;

    setNote([...notes, { id: id + 1, text: "", workOrPersonal: "Work" }]);
    console.log(id);
  }

  function filterNotes(workOrPersonal: string) {
    console.log(workOrPersonal)
    setNote(notes.filter(note => note.workOrPersonal === workOrPersonal))
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
      <Header newNote={newNote} filterNotes= {filterNotes}/>

      <div>
        <NoteContainer
          changeType={changeType}
          deleteNote={deleteNote}
          notes={notes}
          options={options}
        />
      </div>
    </div>
  );
}


export default App;
