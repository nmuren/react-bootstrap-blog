import React, { useMemo, useState, useEffect } from "react";
import { keyGenerator } from "utils/commonUtils";

const Pagination = ({ active, total = 0, dataPerPage = 1, onChange }) => {
  const [items, setItems] = useState([]);

  const pageCount = useMemo(
    () => Math.ceil(total / Math.max(1, dataPerPage)),
    [total, dataPerPage]
  );

  useEffect(() => {
    const listItems = [];

    const handlePageChange = (event) => {
      onChange(Number.parseInt(event.target.innerText));
    };

    for (let i = 1; i <= pageCount; i++) {
      listItems.push(
        <button
          type="button"
          className="mb-3"
          onClick={handlePageChange}
          key={keyGenerator()}
        >
          <span
            className={active === i ? "custom-pagination-active" : "text-muted"}
            name={i}
          >
            {i}
          </span>
        </button>
      );
    }

    setItems(listItems);
  }, [pageCount, active, onChange]);

  return <div className="custom-pagination">{items.map((item) => item)}</div>;
};

export default Pagination;
