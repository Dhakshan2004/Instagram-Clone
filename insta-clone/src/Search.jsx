function SearchOffcanvas() {
  return (
    <div
      className="offcanvas offcanvas-start"
      id="searchOffcanvas"
      tabIndex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div
        className="offcanvas-header"
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="offcanvas-title">Search</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div
        className="offcanvas-body"
        onClick={(e) => e.stopPropagation()}   
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search"
        />
        <hr />
        <p className="text-muted">
          Try searching people, reels, tags
        </p>
      </div>
    </div>
  );
}

export default SearchOffcanvas;
