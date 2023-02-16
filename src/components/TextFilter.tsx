import './TextFilter.css'

function TextFilter(props: {filterByText: Function}) {
  return (
    <div className="textfilter">
      <label>Filter:</label>
      <input type="text" placeholder="Please type here..." onChange={(e) => props.filterByText(e.target.value)}></input>
    </div>
  );
}

export default TextFilter;
