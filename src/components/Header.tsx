import NewNote from "./NewNote";
import CategoryFilter from "./CategoryFilter";
import "./Header.css"
import TextFilter from "./TextFilter"

function Header(props: {newNote: Function, filterNotes: Function, handleSearchState: Function}) {
  return (
    <div>
      <div className="header">
        <h1>Notes</h1>
        <NewNote newNote={props.newNote} />
        <CategoryFilter filterNotes={props.filterNotes}/>
        <TextFilter handleSearchState={props.handleSearchState}/>
      </div>
    </div>
  );
}

export default Header;