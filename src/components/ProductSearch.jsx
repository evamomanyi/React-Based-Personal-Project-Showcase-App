function ProductSearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search coffee..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(
          e.target.value
        )
      }
    />
  );
}

export default ProductSearch;