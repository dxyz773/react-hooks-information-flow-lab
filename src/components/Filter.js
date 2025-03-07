function Filter({ handleChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={(event) => handleChange(event)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
