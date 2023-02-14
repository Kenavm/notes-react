import './TextFilter.css'

function TextFilterComponent(props: {filterNotesByTextContent: Function}) {
  return (
    <div className="textfilter">
      <label>Filter:</label>
      <input type="text" placeholder="Please type here..." onChange={(e) => props.filterNotesByTextContent(e.target.value)}></input>
    </div>
  );
}

export default TextFilterComponent;
