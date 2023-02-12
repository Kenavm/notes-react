import NewNote from "./NewNote";
import CategoryFilter from "./CategoryFilter";
import "./Header.css"

function Header(props: {newNote: Function, filterNotes: Function}) {
  return (
    <div>
      <div className="header">
        <h1>Notes</h1>
        <NewNote newNote={props.newNote} />
        <CategoryFilter filterNotes={props.filterNotes}/>
      </div>
    </div>
  );
}

export default Header;