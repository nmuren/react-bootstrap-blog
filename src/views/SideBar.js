import React from "react";

import SearchBox from "components/SearchBox";

const SideBar = (props) => {
  return (
    <div className={props.className}>
      <SearchBox baseUrl="/blog" />
    </div>
  );
};

export default SideBar;
