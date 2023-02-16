import './TextFilter.css'

function TextFilter(props: {handleSearchState: Function}) {
  return (
    <div className="textfilter">
      <label>Filter:</label>
      <input type="text" placeholder="Please type here..." onChange={(e) => props.handleSearchState(e.target.value)}></input>
    </div>
  );
}

export default TextFilter;
