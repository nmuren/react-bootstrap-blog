import React from "react";

import SearchBox from "components/SearchBox";
import SideList from "components/SideList";

const SideBar = (props) => {
  const categoryList = [
    {
      text: "Advertising",
      url: "",
      count: "18",
    },
    {
      text: "Creative",
      url: "",
      count: "39",
    },
    {
      text: "Inspiration",
      url: "",
      count: "56",
    },
    {
      text: "LifeStyle",
      url: "",
      count: "47",
    },
    {
      text: "Music",
      url: "",
      count: "16",
    },
    {
      text: "Photography",
      url: "",
      count: "98",
    },
    {
      text: "Fashion",
      url: "",
      count: "65",
    },
    {
      text: "Travel",
      url: "",
      count: "82",
    },
  ];

  return (
    <div className={props.className}>
      <SearchBox baseUrl="/blog" />
      <SideList title="CATEGORIES" items={categoryList} />
    </div>
  );
};

export default SideBar;
