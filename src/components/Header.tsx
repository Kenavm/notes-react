import NewNote from "./NewNote";
import CategoryFilter from "./CategoryFilter";
import "./Header.css"
import TextFilter from "./TextFilter"

function Header(props: {newNote: Function, filterNotes: Function, filterByText: Function}) {
  return (
    <div>
      <div className="header">
        <h1>Notes</h1>
        <NewNote newNote={props.newNote} />
        <CategoryFilter filterNotes={props.filterNotes}/>
        <TextFilter filterByText={props.filterByText}/>
      </div>
    </div>
  );
}

export default Header;