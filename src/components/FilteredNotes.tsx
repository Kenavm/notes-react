import './NoteContainer.css'
import Note from '../NoteType'

function FilteredNoteContainer(props: {
  changeType: Function;
  deleteNote: Function;
  filteredNotes: Note[];
  options: string[];
}) {
  return (
    <div className="note-wrapper">
      {props.filteredNotes.map((note) => (
        <div
          key={note.id}
          className={
            note.workOrPersonal === "Work" ? "note-work" : "note-personal"
          }
        >
          {" "}
          <textarea
            placeholder="Type to add a note...."
            className={
              note.workOrPersonal === "Work"
                ? "textarea-work"
                : "textarea-personal"
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

export default FilteredNoteContainer;
