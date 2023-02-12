
function NewNote(props: {newNote: Function}) {
  return (
    <button onClick={() => props.newNote()} className="new-note">
      New
    </button> 
  );
}

export default NewNote;
