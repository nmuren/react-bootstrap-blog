import React from "react";

import SearchBox from "components/SearchBox";
import SideList from "components/SideList";
import LatestPosts from "views/content/LatestPosts";

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

  const archiveList = [
    {
      text: "December, 2016",
      url: "",
      count: "18",
    },
    {
      text: "November, 2016",
      url: "",
      count: "39",
    },
    {
      text: "October, 2016",
      url: "",
      count: "56",
    },
    {
      text: "September, 2016",
      url: "",
      count: "47",
    },
    {
      text: "August, 2016",
      url: "",
      count: "16",
    },
  ];

  return (
    <div className={props.className}>
      <SearchBox baseUrl="/blog" />
      <SideList title="CATEGORIES" items={categoryList} />
      <LatestPosts title="LATEST POSTS" />
      <SideList title="ARCHIVES" items={archiveList} />
    </div>
  );
};

export default SideBar;
