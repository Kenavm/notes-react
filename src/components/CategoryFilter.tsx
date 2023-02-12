import "./CategoryFilter.css";

function CategoryFilter(props: { filterNotes: Function }) {
  return (
    <div className="category-filter">
      <label>Work, Personal or both? </label>
      <select onChange={(e) => props.filterNotes(e.target.value)}>
        <option>Both</option>
        <option>Work</option>
        <option>Personal</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
