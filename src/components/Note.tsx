import './Note.css'
import NoteType from '../types/NoteType'

function Note(props: {
  changeType: Function;
  deleteNote: Function;
  notes: NoteType[];
  options: string[];
}) {
  return (
    <div className="note-wrapper">
      {props.notes.map((note) => (
        <div
          key={note.id}
          className={
            note.type === "Work" ? "note" : "note note-personal"
          }
        >
          {" "}
          <textarea
            placeholder="Type to add a note...."
            className={
              note.type === "Work"
                ? "textarea"
                : "textarea personal"
            }
          ></textarea>
          <div className="note-options">
            <select
              className="type-of-note"
              onChange={(e) => props.changeType(note.id, e.target.value)}
            >
              {" "}
              {props.options.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
            <button
              className="delete"
              onClick={() => props.deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Note;
