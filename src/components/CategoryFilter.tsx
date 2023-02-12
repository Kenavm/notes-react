import './CategoryFilter.css'

function CategoryFilter(props: {filterNotes: Function}) {
    return(
        <div className='category-filter'>
            <select onChange={(e) => props.filterNotes(e.target.value)}>
                <option>Work</option>
                <option>Personal</option>
            </select>
        </div>

    )
}

export default CategoryFilter;