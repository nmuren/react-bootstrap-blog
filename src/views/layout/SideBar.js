import React from "react";

import LatestPosts from "views/content/LatestPosts";
import RecentComments from "views/content/RecentComments";
import Newsletter from "views/content/Newsletter";
import SearchBox from "components/SearchBox";
import SideList from "components/SideList";
import TagList from "components/TagList";
import Banner from "components/Banner";

const SideBar = ({ className = "" }) => {
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
    <div className={className}>
      <SearchBox baseUrl="/blog" />
      <SideList title="CATEGORIES" items={categoryList} />
      <Newsletter title="NEWSLETTER" />
      <LatestPosts title="LATEST POSTS" />
      <RecentComments title="RECENT COMMENTS" />
      <SideList title="ARCHIVES" items={archiveList} />
      <TagList title="TAGS CLOUD" items={categoryList} />
      <Banner />
    </div>
  );
};

export default SideBar;
