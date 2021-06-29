import React, { useMemo, useState, useEffect } from "react";
import { keyGenerator } from "utils/commonUtils";

const Pagination = (props) => {
  const { active, total = 0, dataPerPage = 1, onChange } = props;
  const [items, setItems] = useState([]);

  const pageCount = useMemo(
    () => Math.ceil(total / dataPerPage),
    [total, dataPerPage]
  );

  useEffect(() => {
    const listItems = [];

    const handlePageChange = (event) => {
      onChange(event.target.name);
    };

    for (let i = 1; i <= pageCount; i++) {
      listItems.push(
        <button
          type="button"
          name={i}
          className={active === i ? "custom-pagination-active" : ""}
          onClick={handlePageChange}
          key={keyGenerator()}
        >
          {i}
        </button>
      );
    }

    setItems(listItems);
  }, [pageCount, active, onChange]);

  return <div className="custom-pagination">{items.map((item) => item)}</div>;
};

export default Pagination;
